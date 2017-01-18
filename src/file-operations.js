import path from 'path'
import fs from 'mz/fs'

export const pkg = require(path.join(process.cwd(), 'package.json'))

function isRNVersionNew ({ dependencies }) {
  return parseFloat(dependencies["react-native"]) >= 0.4
}

export async function readFile (file, readDirPath) {
  const fileData = await fs.readFile(path.join(readDirPath, file), 'utf-8')
  return fileData
}

export function parseFile (fileData, templateName, packageName = null, app = null) {
  const isRNNew = isRNVersionNew(pkg)

  const iOSHeader = isRNNew ? '<React/' : '"'
  const iOSCloser = isRNNew ? '>' : '"'

  return fileData.replace(/{{template}}/g, templateName)
    .replace(/{{packageName}}/g, packageName)
    .replace(/{{app}}/g, app)
    .replace(/{{iOSHeader}}/g, iOSHeader)
    .replace(/{{iOSCloser}}/g, iOSCloser)
}

export default function readAndWriteFiles (files, paths, templateName, packageName = null, app = null) {
  const { readDirPath, writeDirPath } = paths
  return Promise.all(
    files.map(async function(file) {
      const fileData = await readFile(file, readDirPath)
      const parsedFile = parseFile(fileData, templateName, packageName, app)
      const fileName = file.replace('Template', templateName)
      return fs.writeFile(path.join(writeDirPath, fileName), parsedFile)
    })
  )
}
