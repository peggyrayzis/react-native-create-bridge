# react-native-create-bridge
Bridging native modules & UI components made easy! If you're a JavaScript developer writing your first lines of native code or a more experienced developer looking to eliminate boilerplate from your React Native workflow, this tool is for you.

## Getting Started
1. `npm install -g react-native-create-bridge` or `yarn global add react-native-create-bridge`
2. From the root of your React Native project, run `create-bridge`
3. The prompts will ask you for:
  - Your bridge module name
  - Whether you want to create a native module or UI component (or both!)
  - The platforms and languages you would like to support. Currently, we default to iOS/Obj-C and Android/Java, but you can also choose iOS/Swift or Android/Kotlin if you prefer.
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

#### Android/Kotlin
  ##### Adding Kotlin support to your project:
  - You will need to install the [Android Studio 3 preview](https://developer.android.com/studio/preview/index.html)
  - In `android/build.gradle`, add `ext.kotlin_version = '1.1.2-4'` to the `buildscript` and `classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"` to your `dependencies`
  - In `android/app/build.gradle`, add `apply plugin: 'kotlin-android'` to the top of the file. At the bottom, add `compile "org.jetbrains.kotlin:kotlin-stdlib-jre7:$kotlin_version"` to your dependencies
  - Now, you can convert any Java file to a Kotlin file by navigating to `Code > Convert Java file to Kotlin file` in the top menu

  ##### Completing the bridging process:
  - If you already followed all the steps above, you can complete the bridging process by looking for `MainApplication.kt` in `android/app/src/main/java/com/yourapp`
  - Add your package to the getPackages function like this:
  ```
  override fun getPackages(): List<ReactPackage> {
    return Arrays.asList(
        MainReactPackage(),
        YourModulePackage(),
    )
  }
  ```
  - Import your package at the top: `import com.yourapp.yourmodule.YourModulePackage`

#### iOS/Obj-C
  - Currently, you will need to add the files manually to your project in Xcode. Right click on the folder with your app name and select `Add Files To YourApp`. Select the files associated with your module and click `Add`

#### iOS/Swift
  - If this is your first Swift module in your project, you will need to make sure you have a Obj-C bridging header to expose any Obj-C code to Swift. Read [Importing Obj-C into Swift](https://developer.apple.com/library/content/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html) to learn more.

## Goals
- [x] Delivers bridge module in Obj-C, Swift, Kotlin, & Java
- [x] Compatible with all versions of React Native, including v0.40+
- [x] Split out native UI components & modules into their own templates
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

If you would like to contribute, please read the [contributor guidelines](https://github.com/peggyrayzis/react-native-create-bridge/blob/master/CONTRIBUTING.md) first.

This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/version/1/3/0/).
By participating, you are expected to uphold this code. Please report unacceptable behavior to peggyrayzis@gmail.com.

## Contributors
A big thank you goes out to these awesome people for their contributions ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/3629876?v=4" width="100px;"/><br /><sub>Kurtis Kemple</sub>](https://twitter.com/kurtiskemple)<br />[💻](https://github.com/peggyrayzis/react-native-create-bridge/commits?author=kkemple "Code") | [<img src="https://avatars0.githubusercontent.com/u/3772710?v=4" width="100px;"/><br /><sub>Duy Bao Nguyen</sub>](https://github.com/bduyng)<br />[💻](https://github.com/peggyrayzis/react-native-create-bridge/commits?author=bduyng "Code") | [<img src="https://avatars2.githubusercontent.com/u/2464966?v=4" width="100px;"/><br /><sub>Mike Grabowski</sub>](https://github.com/grabbou)<br />[💬](#question-grabbou "Answering Questions") | [<img src="https://avatars1.githubusercontent.com/u/18017067?v=4" width="100px;"/><br /><sub>Peggy Rayzis</sub>](https://twitter.com/peggyrayzis)<br />[💻](https://github.com/peggyrayzis/react-native-create-bridge/commits?author=peggyrayzis "Code") [📖](https://github.com/peggyrayzis/react-native-create-bridge/commits?author=peggyrayzis "Documentation") [👀](#review-peggyrayzis "Reviewed Pull Requests") | [<img src="https://avatars1.githubusercontent.com/u/24268882?v=4" width="100px;"/><br /><sub>Mihovil</sub>](https://github.com/Air-Miha)<br />[📝](#blog-Air-Miha "Blogposts") | [<img src="https://avatars0.githubusercontent.com/u/2574011?v=4" width="100px;"/><br /><sub>André Neves</sub>](http://andrenev.es)<br />[👀](#review-andrerfneves "Reviewed Pull Requests") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
