const path = require("path");
const fs = require("mz/fs");
const compareVersions = require("compare-versions");

const pkg = require(path.join(process.cwd(), "package.json"));

// compare-versions module doesn't export the validate() function, and we need it, so it's copied here

var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

function validate(version) {
  if (typeof version !== "string") {
    throw new TypeError("Invalid argument expected string");
  }
  if (!semver.test(version)) {
    throw new Error("Invalid argument not valid semver");
  }
}

function getFileNames(dirPath) {
  return fs.readdir(dirPath).catch(e => console.error("[getFileNames] ", e));
}

function readFile(file, readDirPath) {
  return fs
    .readFile(path.join(readDirPath, file), "utf-8")
    .catch(e => console.error("[readFile] ", e));
}

function parseFile(fileData, { templateName, packageName, app, rnVersion }) {
  let kotlinPackage;
  let javaPackage;
  var version = rnVersion;
  try {
    validate(version);
  } catch (e) {
    version = null;
  }
  // TODO: figure out a better way to handle one off breaking changes
  if (version && compareVersions(version, "0.47.2") < 0) {
    kotlinPackage = `
    override fun createJSModules(): List<Class<out JavaScriptModule>> {
        return emptyList()
    }

    `;

    javaPackage = `
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    `;
  } else {
    kotlinPackage = "";
    javaPackage = "";
  }

  return fileData
    .replace(/{{template}}/g, templateName)
    .replace(/{{packageName}}/g, packageName)
    .replace(/{{app}}/g, app)
    .replace(/{{kotlinPackage}}/g, kotlinPackage)
    .replace(/{{javaPackage}}/g, javaPackage);
}

function readAndWriteFiles(files, paths, config) {
  const { readDirPath, writeDirPath } = paths;
  return Promise.all(
    files.map(file => {
      readFile(file, readDirPath).then(fileData => {
        const parsedFile = parseFile(fileData, config);
        const fileName = file.replace("Template", config.templateName);
        return fs.writeFile(path.join(writeDirPath, fileName), parsedFile);
      });
    })
  ).catch(e => console.error("[readAndWriteFiles] ", e));
}

module.exports = {
  pkg,
  getFileNames,
  readFile,
  parseFile,
  readAndWriteFiles
};
