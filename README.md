# react-native-create-bridge
React Native bridge modules made easy! If you're a JavaScript developer writing your first lines of native code or a more experienced developer looking to eliminate boilerplate from your React Native workflow, this tool is for you.

## Getting Started
1. `npm install -g react-native-create-bridge` or `yarn global add react-native-create-bridge`
2. From the root of your React Native project, run `create-bridge`
3. The prompts will ask you for:
  - Your bridge module name
  - The platforms and languages you would like to support. Currently, we default to iOS/Obj-C, iOS/Swift, and Android/Java. We realize that this would not compile properly; however, we see this CLI as a learning tool to compare all 3 approaches.
  - The directory where you would like your JS files. If it doesn't exist, we'll create it for you.
4. That's it! 📦 Sit back and we'll deliver your native module for you lightning fast! ⚡️

## Next Steps
Depending on your environment, there may be a couple more steps that you have to take. In future versions of react-native-create-bridge, we want to eliminate these steps.

#### Android/Java
  - To complete the bridging process, look for `MainApplication.java` in `android/app/src/main/java/com/yourapp`
  - Add your package to the getPackages function like this:

  ```
  @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new YourModulePackage()
      );
    }
  ```
  - Import your package at the top: `import com.yourapp.yourmodule.YourModulePackage;`

#### iOS/Obj-C
  - To complete the bridging process, look for `AppDelegate.h` in `ios/yourapp`
  - Add `#import <YourModule/YourModule.h>` to the top of the file

#### iOS/Swift
  - If this is your first Swift module in your project, you will need to make sure you have a Obj-C bridging header to expose any Obj-C code to Swift. Read [Importing Obj-C into Swift](https://developer.apple.com/library/content/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html) to learn more.

## Goals
- [x] Delivers bridge module in Obj-C, Swift, & Java
- [x] Compatible with all versions of React Native, including v0.40+
- [ ] Config to remove comments for more experienced users
- [ ] Modifies existing project files (`AppDelegate.h`, `MainApplication.java`) to complete the bridging process
- [ ] Your feature request could be here! Open up an issue and give us feedback 😊


## Setting Up Dev Environment
1. Fork this repo & clone it
2. `cd` to where you cloned it
3. `npm install` or `yarn`
4. After you make changes, link your local package by running `npm run package:dev`
5. You can now run `create-bridge` locally in a React Native project to test your changes
6. `npm run test` will run the Jest test suite


## Contributing
`react-native-create-bridge` is a new project and we would love feedback from the community on how it should evolve. Please report any 🐞s and let us know how you're using `react-native-create-bridge`!

This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/version/1/3/0/).
By participating, you are expected to uphold this code. Please report unacceptable behavior to peggyrayzis@gmail.com.
