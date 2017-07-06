//  Created by react-native-create-bridge

import Foundation
import UIKit

@objc({{template}})
class {{template}}Manager : RCTViewManager {
  // Return the native view that represents your React component
  override func view() -> UIView! {
    return {{template}}View()
  }

  // Export constants to use in your native module
  override func constantsToExport() -> [String : Any]! {
    return ["EXAMPLE_CONSTANT": "example"]
  }

}
