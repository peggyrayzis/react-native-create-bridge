#! /usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import isValid from "is-valid-path";
import mkdir from "mkdirp-promise";
import { success as successIcon, error as errorIcon } from "log-symbols";

import readAndWriteFiles, { pkg, getFileNames } from "./file-operations";

const templateNameRegex = /\w+/;
const promptConfig = [
  {
    type: "input",
    name: "templateName",
    message: "What is your bridge module called?",
    default: "ExampleBridge",
    validate: input => templateNameRegex.test(input)
  },
  {
    type: "checkbox",
    name: "bridgeType",
    message: "What type of bridge would you like to create?",
    default: ["Native Module", "Native UI Component"],
    choices: ["Native Module", "Native UI Component"]
  },
  {
    type: "checkbox",
    name: "environment",
    message: "What OS & languages would you like to support?",
    default: ["Android/Java", "iOS/Objective-C"],
    choices: ["Android/Java", "Android/Kotlin", "iOS/Swift", "iOS/Objective-C"]
  },
  {
    type: "input",
    name: "jsPath",
    message: "What directory should we deliver your JS files to?",
    default: ".",
    validate: input => isValid(input)
  }
];

const environmentMap = {
  "Android/Java": createJavaEnvironment,
  "Android/Kotlin": createKotlinEnvironment,
  "iOS/Swift": createSwiftEnvironment,
  "iOS/Objective-C": createObjCEnvironment
};

async function init() {
  try {
    const {
      environment,
      bridgeType,
      templateName,
      jsPath
    } = await inquirer.prompt(promptConfig);

    const templateFolder = bridgeType.length > 1
      ? "combined"
      : bridgeType[0] === "Native Module" ? "modules" : "ui-components";

    const promises = environment.map(env =>
      environmentMap[env](templateName, templateFolder)
    );

    promises.push(createJSEnvironment(templateName, templateFolder, jsPath));
    await Promise.all(promises);

    console.log(
      `${successIcon} Your bridge module was successfully created! 🎉`
    );
  } catch (e) {
    console.log(
      `${errorIcon} Oh no! 💩  Something went wrong with creating your bridge module.\nPlease report any errors here: https://github.com/peggyrayzis/react-native-create-bridge/issues\n\nError: ${e}`
    );
  }
}

async function createJavaEnvironment(templateName, templateFolder) {
  const appPath = path.join(
    process.cwd(),
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    pkg.name
  );

  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "android-java"
  );

  const writeDirPath = await mkdir(
    path.join(appPath, templateName.toLowerCase())
  );

  const paths = {
    readDirPath,
    writeDirPath: writeDirPath
      ? writeDirPath
      : path.join(appPath, templateName.toLowerCase())
  };

  const files = await getFileNames(readDirPath);

  return readAndWriteFiles(
    files,
    paths,
    templateName,
    templateName.toLowerCase(),
    pkg.name.toLowerCase()
  );
}

async function createKotlinEnvironment(templateName, templateFolder) {
  const appPath = path.join(
    process.cwd(),
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    pkg.name
  );

  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "android-kotlin"
  );

  const writeDirPath = await mkdir(
    path.join(appPath, templateName.toLowerCase())
  );

  const paths = {
    readDirPath,
    writeDirPath: writeDirPath
      ? writeDirPath
      : path.join(appPath, templateName.toLowerCase())
  };

  const files = await getFileNames(readDirPath);

  return readAndWriteFiles(
    files,
    paths,
    templateName,
    templateName.toLowerCase(),
    pkg.name.toLowerCase()
  );
}

async function createSwiftEnvironment(templateName, templateFolder) {
  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "ios-swift"
  );

  const paths = {
    readDirPath,
    writeDirPath: path.join(process.cwd(), "ios")
  };

  const files = await getFileNames(readDirPath);

  return readAndWriteFiles(files, paths, templateName);
}

async function createObjCEnvironment(templateName, templateFolder) {
  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "ios-objc"
  );

  const paths = {
    readDirPath,
    writeDirPath: path.join(process.cwd(), "ios")
  };

  const files = await getFileNames(readDirPath);

  return readAndWriteFiles(files, paths, templateName);
}

async function createJSEnvironment(templateName, templateFolder, jsPath) {
  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "js"
  );

  await mkdir(jsPath);

  const paths = {
    readDirPath,
    writeDirPath: jsPath
  };

  const files = await getFileNames(readDirPath);

  return readAndWriteFiles(files, paths, templateName);
}

init();
