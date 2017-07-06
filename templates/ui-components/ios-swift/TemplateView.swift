//  Created by react-native-create-bridge

import Foundation

@objc({{template}}View)
class {{template}}View : UIView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }

  required init?(coder aDecoder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
  }

  func setExampleProp(exampleProp: NSString) {
    self.exampleProp = exampleProp
  }

}