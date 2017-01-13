# react-native-create-bridge



## Getting Started
1. `npm install -g react-native-create-bridge` or `yarn global add react-native-create-bridge`
2. From the root of your React Native project, run `create-bridge`
3. The prompts will ask you for:
  - Your bridge module name
  - The platforms and languages you would like to support. Currently, we default to iOS/Obj-C, iOS/Swift, and Android/Java. We realize that this would not compile properly; however, we see this CLI as a learning tool to compare all 3 approaches.
  - The directory where you would like your JS files. If it doesn't exist, we'll create it for you.
4. That's it! 📦 Sit back, relax, and we'll deliver your native module for you lightning fast! ⚡️

## Next Steps
Depending on your environment, there may be a couple more steps that you have to take. In future versions of react-native-create-bridge, we will be looking to eliminate these steps.

##### Android/Java
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

##### iOS/Obj-C
  - To complete the bridging process, look for `AppDelegate.h` in `ios/yourapp`
  - Add `#import <YourModule/YourModule.h>` to the top of the file

##### iOS/Swift

## Goals
- [x] Delivers bridge module in Obj-C, Swift, & Java
- [x] Compatible with all versions of React Native, including v0.40+
- [ ] Config to remove comments for more experienced users
- [ ] Modifies existing project files (Bridging Headers, MainApplication.java) to complete the bridging process


## Setting Up Dev Environment
1. Fork this repo
2. Clone it `git clone https://github.com/peggyrayzis/react-native-create-bridge`
3. `cd` to where you cloned it
4. `npm install` or `yarn`
5. After you make changes, `npm run package`
6. You can now run `create-bridge` locally to test your changes


## Contributing
react-native-create-bridge is a new project and we would love feedback from the community on how it should evolve. Please report any bugs and let us know how you're using react-native-create-bridge!

If you would like to contribute, please head to our [Contributor Guide](CONTRIBUTING.md).

This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/version/1/3/0/).
By participating, you are expected to uphold this code. Please report unacceptable behavior to peggyrayzis@gmail.com.
