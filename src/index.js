import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'

const templateNameRegex = /\w+/
const validDirectoryRegex = //

const pkg = require(path.join(process.cwd, 'package.json'))

const promptConfig = [
  {
    type: 'input',
    name: 'templateName',
    message: 'What do you want to call your bridge module?',
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
    message: 'What directory would you like us to deliver your JavaScript files?',
    default: '.',
    validate: (input) => validDirectoryRegex.test(input),
  }
]

inquirer.prompt(promptConfig)
  .then(answers => answers.environment.map(env => environmentMap[env](answers.templateName)))

const environmentMap = {
  'Android/Java': createAndroidEnvironment,
  'iOS/Swift': createSwiftEnvironment,
  'iOS/Objective-C': createObjCEnvironment
}

function createAndroidEnvironment (templateName) {
  const templateDirPath = path.join(__dirname, '..', 'templates', 'android')
  const writeDirPath = path.join(
    process.cwd,
    'android',
    'app',
    'src',
    'main',
    'java',
    'com',
    pkg.name,
    templateName.toLowerCase()
  )

  fs.readFile(path.join(templateDirPath, 'TemplatePackage.java'), (err, data) => {
    data.replace('{{template}}', templateName)
      .replace('{{packageName}}', templateName.toLowerCase())
      .replace('{{app}}', pkg.name)

    fs.writeFile(path.join(writeDirPath, `${templateName}Package.java`), data)
  })

  fs.readFile(path.join(templateDirPath, 'TemplateModule.java'), (err, data) => {
    data.replace('{{template}}', templateName)
      .replace('{{packageName}}', templateName.toLowerCase())
      .replace('{{app}}', pkg.name)

    fs.writeFile(path.join(writeDirPath, `${templateName}Module.java`), data)
  })

  fs.readFile(path.join(templateDirPath, 'TemplateManager.java'), (err, data) => {
    data.replace('{{template}}', templateName)
      .replace('{{packageName}}', templateName.toLowerCase())
      .replace('{{app}}', pkg.name)

    fs.writeFile(path.join(writeDirPath, `${templateName}Manager.java`), data)
  })
}

function createSwiftEnvironment (templateName) {
  const templateDirPath = path.join(__dirname, '..', 'templates', 'ios-swift')
  const writeDirPath = path.join(process.cwd, 'ios')

  fs.readFile(path.join(templateDirPath, 'Template.m'), (err, data) => {
    data.replace('{{template}}', templateName)

    fs.writeFile(path.join(writeDirPath, `${templateName}.m`), data)
  })

  fs.readFile(path.join(templateDirPath, 'TemplateManager.swift'), (err, data) => {
    data.replace('{{template}}', templateName)

    fs.writeFile(path.join(writeDirPath, `${templateName}Manager.swift`), data)
  })
}

function createObjCEnvironment (templateName) {
  const templateDirPath = path.join(__dirname, '..', 'templates', 'ios-objc')
  const writeDirPath = path.join(process.cwd, 'ios')

  fs.readFile(path.join(templateDirPath, 'Template.h'), (err, data) => {
    data.replace('{{template}}', templateName)

    fs.writeFile(path.join(writeDirPath, `${templateName}.h`), data)
  })

  fs.readFile(path.join(templateDirPath, 'TemplateManager.m'), (err, data) => {
    data.replace('{{template}}', templateName)

    fs.writeFile(path.join(writeDirPath, `${templateName}Manager.m`), data)
  })
}

function createJSEnvironment () {
  const templateDirPath = path.join(__dirname, '..', 'templates', 'js')
}
