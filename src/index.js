import inquirer from 'inquirer'
import path from 'path'
import fs from 'mz/fs'
import isValid from 'is-valid-path'

const templateNameRegex = /\w+/
const pkg = require(path.join(process.cwd, 'package.json'))
const promptConfig = [
  {
    type: 'input',
    name: 'templateName',
    message: 'What is your bridge module called?',
    default: 'ExampleBridge',
    validate: (input) => templateNameRegex.test(input),
  },
  {
    type: 'checkbox',
    name: 'environment',
    message: 'What OS & languages would you like to support?',
    default: ['Android/Java', 'iOS/Swift', 'iOS/Objective-C'],
    choices: ['Android/Java', 'iOS/Swift', 'iOS/Objective-C']
  },
  {
    type: 'input',
    name: 'jsPath',
    message: 'What path should we deliver your JS files to?',
    default: '.',
    validate: (input) => isValid(input),
  }
]

const environmentMap = {
  'Android/Java': createAndroidEnvironment,
  'iOS/Swift': createSwiftEnvironment,
  'iOS/Objective-C': createObjCEnvironment
}

async function init () {
  try {
    const answers = inquirer.prompt(promptConfig)

    await* answers.environment.map(async function(env) {
      return environmentMap[env](answers.templateName))
    })

    await createJSModules(answers.templateName, answers.jsPath)

    console.log('Your bridge was successfully created! 🎉')
  } catch (e) {
    console.log(err))
  }
}

function parseFile (fileData, templateName, packageName = null, app = null) {
  if (packageName && app) {
    return fileData.replace('{{packageName}}', packageName)
    .replace('{{app}}', app)
    .replace('{{template}}', templateName)
  } else {
    return fileData.replace('{{template}}', templateName)
  }
}

async function readAndWriteFiles (files, paths, templateName, packageName = null, app = null) {
  const { readDirPath, writeDirPath } = paths
  try {
    return await* files.map(async function(file) {
      const fileData = await fs.readFile(path.join(readDirPath, file), 'utf-8')
      parseFile(fileData)
      fileName = file.replace('Template', templateName)
      await fs.writeFile(path.join(writeDirPath, fileName), fileData)
    }
  } catch (err) {
    console.err(err)
  }
}

async function createAndroidEnvironment (templateName) {
  const appPath = path.join(
    process.cwd,
    'android',
    'app',
    'src',
    'main',
    'java',
    'com',
    pkg.name
  )
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'android')
    writeDirPath: await fs.makeDir(path.join(appPath, templateName.toLowerCase()))
  }
  const files = ['TemplatePackage.java', 'TemplateModule.java', 'TemplateManager.java']
  await readAndWriteFiles(files, paths, templateName, templateName.toLowerCase(), pkg.name)
}

function createSwiftEnvironment (templateName) {
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'ios-swift')
    writeDirPath: path.join(process.cwd, 'ios')
  }
  const files = ['Template.m', 'TemplateManager.swift']
  await readAndWriteFiles(files, paths, templateName)
}


function createObjCEnvironment (templateName) {
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'ios-objc')
    writeDirPath: path.join(process.cwd, 'ios')
  }
  const files = ['Template.h', 'TemplateManager.m']
  await readAndWriteFiles(files, paths, templateName)
}

async function createJSEnvironment (templateName, jsPath) {
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'js'),
    writeDirPath: jsPath
  }
  const files = ['TemplateNativeModule.js', 'TemplateNativeView.js']
  await readAndWriteFiles(files, paths, templateName)
}

init()
