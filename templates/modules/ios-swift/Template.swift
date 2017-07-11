//  Created by react-native-create-bridge

import Foundation

@objc({{template}})
class {{template}} : NSObject {
  // Export constants to use in your native module
  override func constantsToExport() -> [String : Any]! {
    return ["EXAMPLE_CONSTANT": "example"]
  }

  // Implement methods that you want to export to the native module
  @objc func exampleMethod() {
    // write method here
  }
}
