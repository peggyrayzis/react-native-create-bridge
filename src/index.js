const inquirer = require("inquirer");
const path = require("path");
const isValid = require("is-valid-path");
const mkdir = require("mkdirp-promise");
const logSymbols = require("log-symbols");

const successIcon = logSymbols.success;
const errorIcon = logSymbols.error;

const fileOperations = require("./file-operations");
const { pkg, getFileNames, readAndWriteFiles } = fileOperations;

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

function init() {
  inquirer
    .prompt(promptConfig)
    .then(result => {
      const { environment, bridgeType, templateName, jsPath } = result;

      const templateFolder =
        bridgeType.length > 1
          ? "combined"
          : bridgeType[0] === "Native Module" ? "modules" : "ui-components";

      const promises = environment.map(env =>
        environmentMap[env](templateName, templateFolder)
      );

      promises.push(createJSEnvironment(templateName, templateFolder, jsPath));

      Promise.all(promises).then(() => {
        console.log(
          `${successIcon} Your bridge module was successfully created! 🎉`
        );
      });
    })
    .catch(e => {
      console.log(
        `${errorIcon} Oh no! 💩  Something went wrong with creating your bridge module.\nPlease report any errors here: https://github.com/peggyrayzis/react-native-create-bridge/issues\n\nError: ${e}`
      );
    });
}

function createJavaEnvironment(templateName, templateFolder) {
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

  mkdir(path.join(appPath, templateName.toLowerCase())).then(writeDirPath => {
    const paths = {
      readDirPath,
      writeDirPath: writeDirPath
        ? writeDirPath
        : path.join(appPath, templateName.toLowerCase())
    };

    getFileNames(readDirPath).then(files =>
      readAndWriteFiles(
        files,
        paths,
        templateName,
        templateName.toLowerCase(),
        pkg.name.toLowerCase()
      )
    );
  });
}

function createKotlinEnvironment(templateName, templateFolder) {
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

  return mkdir(
    path.join(appPath, templateName.toLowerCase())
  ).then(writeDirPath => {
    const paths = {
      readDirPath,
      writeDirPath: writeDirPath
        ? writeDirPath
        : path.join(appPath, templateName.toLowerCase())
    };

    return getFileNames(readDirPath).then(files =>
      readAndWriteFiles(
        files,
        paths,
        templateName,
        templateName.toLowerCase(),
        pkg.name.toLowerCase()
      )
    );
  });
}

function createSwiftEnvironment(templateName, templateFolder) {
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

  return getFileNames(readDirPath).then(files =>
    readAndWriteFiles(files, paths, templateName)
  );
}

function createObjCEnvironment(templateName, templateFolder) {
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

  return getFileNames(readDirPath).then(files =>
    readAndWriteFiles(files, paths, templateName)
  );
}

function createJSEnvironment(templateName, templateFolder, jsPath) {
  const readDirPath = path.join(
    __dirname,
    "..",
    "templates",
    templateFolder,
    "js"
  );

  return mkdir(jsPath).then(() => {
    const paths = {
      readDirPath,
      writeDirPath: jsPath
    };

    return getFileNames(readDirPath).then(files =>
      readAndWriteFiles(files, paths, templateName)
    );
  });
}

module.exports = {
  name: "create-bridge",
  description:
    "A CLI tool that bridges React Native modules & UI components with ease",
  func: init
};
