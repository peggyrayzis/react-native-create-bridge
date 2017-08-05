const path = require("path");
const fs = require("mz/fs");

exports.pkg = require(path.join(process.cwd(), "package.json"));

function getFileNames(dirPath) {
  return fs.readdir(dirPath).catch(e => console.error("[getFileNames] ", e));
}

function readFile(file, readDirPath) {
  return fs
    .readFile(path.join(readDirPath, file), "utf-8")
    .catch(e => console.error("[readFile] ", e));
}

function parseFile(fileData, templateName, packageName = null, app = null) {
  return fileData
    .replace(/{{template}}/g, templateName)
    .replace(/{{packageName}}/g, packageName)
    .replace(/{{app}}/g, app);
}

function readAndWriteFiles(
  files,
  paths,
  templateName,
  packageName = null,
  app = null
) {
  const { readDirPath, writeDirPath } = paths;
  return Promise.all(
    files.map(file => {
      readFile(file, readDirPath).then(fileData => {
        const parsedFile = parseFile(fileData, templateName, packageName, app);
        const fileName = file.replace("Template", templateName);
        return fs.writeFile(path.join(writeDirPath, fileName), parsedFile);
      });
    })
  ).catch(e => console.error("[readAndWriteFiles] ", e));
}

module.exports = {
  getFileNames,
  readFile,
  parseFile,
  readAndWriteFiles
};
