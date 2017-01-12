//  Created by react-native-create-bridge

import Foundation

@objc({{template}})
class {{template}}Manager : RCTViewManager {
  // Export constants to use in your native module
  override func constantsToExport() -> [String : Any]! {
    return ["EXAMPLE_CONSTANT": "example"]
  }

  // Return the native view that represents your React component
  override func view() -> UIView! {
    return UIView()
  }

  // Implement methods that you want to export to the native module
  @objc func exampleMethod() {
    // The bridge eventDispatcher is used to send events from native to JS env
    // No documentation yet on DeviceEventEmitter: https://github.com/facebook/react-native/issues/2819
    self.bridge.eventDispatcher().sendAppEvent(withName: "EXAMPLE_EVENT", body: nil)
  }
}
