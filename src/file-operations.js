import path from "path";
import fs from "mz/fs";
import compareVersions from "compare-versions";

export const pkg = require(path.join(process.cwd(), "package.json"));

export async function getFileNames(dirPath) {
  const fileNames = await fs
    .readdir(dirPath)
    .catch(e => console.error("[getFileNames] ", e));
  return fileNames;
}

export async function readFile(file, readDirPath) {
  const fileData = await fs
    .readFile(path.join(readDirPath, file), "utf-8")
    .catch(e => console.error("[readFile] ", e));
  return fileData;
}

export function parseFile(
  fileData,
  { templateName, packageName, app, rnVersion }
) {
  let kotlinPackage;
  let javaPackage;

  // TODO: figure out a better way to handle one off breaking changes
  if (rnVersion && compareVersions(rnVersion, "0.47.2") < 0) {
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

export default function readAndWriteFiles(files, paths, config) {
  const { readDirPath, writeDirPath } = paths;
  return Promise.all(
    files.map(async file => {
      const fileData = await readFile(file, readDirPath);
      const parsedFile = parseFile(fileData, config);
      const fileName = file.replace("Template", config.templateName);
      return fs.writeFile(path.join(writeDirPath, fileName), parsedFile);
    })
  ).catch(e => console.error("[readAndWriteFiles] ", e));
}
