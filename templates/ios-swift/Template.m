//  Created by react-native-create-bridge

#import {{iOSHeader}}RCTViewManager.h{{iOSCloser}}
#import {{iOSHeader}}RCTEventDispatcher.h{{iOSCloser}}

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
@interface RCT_EXTERN_MODULE({{template}}, RCTViewManager)

// Map native properties to React Component props
// https://facebook.github.io/react-native/docs/native-components-ios.html#properties
RCT_EXPORT_VIEW_PROPERTY("exampleProp", NSString)

// Export methods to a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
RCT_EXTERN_METHOD(exampleMethod)

@end
