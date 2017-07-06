import path from "path";
import fs from "mz/fs";

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
  templateName,
  packageName = null,
  app = null
) {
  return fileData
    .replace(/{{template}}/g, templateName)
    .replace(/{{packageName}}/g, packageName)
    .replace(/{{app}}/g, app);
}

export default function readAndWriteFiles(
  files,
  paths,
  templateName,
  packageName = null,
  app = null
) {
  const { readDirPath, writeDirPath } = paths;
  return Promise.all(
    files.map(async file => {
      const fileData = await readFile(file, readDirPath);
      const parsedFile = parseFile(fileData, templateName, packageName, app);
      const fileName = file.replace("Template", templateName);
      return fs.writeFile(path.join(writeDirPath, fileName), parsedFile);
    })
  ).catch(e => console.error("[readAndWriteFiles] ", e));
}
