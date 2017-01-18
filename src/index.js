#! /usr/bin/env node

import inquirer from 'inquirer'
import path from 'path'
import fs from 'mz/fs'
import isValid from 'is-valid-path'
import mkdir from 'mkdirp-promise'

const templateNameRegex = /\w+/
const pkg = require(path.join(process.cwd(), 'package.json'))
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
    message: 'What directory should we deliver your JS files to?',
    default: '.',
    validate: (input) => isValid(input),
  }
]

const environmentMap = {
  'Android/Java': createAndroidEnvironment,
  'iOS/Swift': createSwiftEnvironment,
  'iOS/Objective-C': createObjCEnvironment
}

export function isRNVersionNew ({ dependencies }) {
  return parseFloat(dependencies["react-native"]) >= 0.4
}

async function init () {
  try {
    const answers = await inquirer.prompt(promptConfig)

    const promises = answers.environment.map(async function(env) {
      return environmentMap[env](answers.templateName)
    })

    promises.push(createJSEnvironment(answers.templateName, answers.jsPath))

    await Promise.all(promises)

    console.log('Your bridge was successfully created! 🎉')
  } catch (e) {
    console.log(e)
  }
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

export async function readFile (file, readDirPath) {
  const fileData = await fs.readFile(path.join(readDirPath, file), 'utf-8')
  return fileData
}

function readAndWriteFiles (files, paths, templateName, packageName = null, app = null) {
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

async function createAndroidEnvironment (templateName) {
  const appPath = path.join(
    process.cwd(),
    'android',
    'app',
    'src',
    'main',
    'java',
    'com',
    pkg.name
  )
  const writeDirPath = await mkdir(path.join(appPath, templateName.toLowerCase()))
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'android'),
    writeDirPath
  }
  const files = ['TemplatePackage.java', 'TemplateModule.java', 'TemplateManager.java']
  return readAndWriteFiles(files, paths, templateName, templateName.toLowerCase(), pkg.name)
}

function createSwiftEnvironment (templateName) {
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'ios-swift'),
    writeDirPath: path.join(process.cwd(), 'ios')
  }
  const files = ['Template.m', 'TemplateManager.swift']
  return readAndWriteFiles(files, paths, templateName)
}

function createObjCEnvironment (templateName) {
  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'ios-objc'),
    writeDirPath: path.join(process.cwd(), 'ios')
  }
  const files = ['Template.h', 'TemplateManager.m']
  return readAndWriteFiles(files, paths, templateName)
}

async function createJSEnvironment (templateName, jsPath) {
  await mkdir(jsPath)

  const paths = {
    readDirPath: path.join(__dirname, '..', 'templates', 'js'),
    writeDirPath: jsPath
  }
  const files = ['TemplateNativeModule.js', 'TemplateNativeView.js']
  return readAndWriteFiles(files, paths, templateName)
}

init()
