//  Created by react-native-create-bridge

// import RCTViewManager
#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#elif __has_include(“RCTViewManager.h”)
#import “RCTViewManager.h”
#else
#import “React/RCTViewManager.h” // Required when used as a Pod in a Swift project
#endif

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
@interface RCT_EXTERN_MODULE({{template}}, RCTViewManager)

// Map native properties to React Component props
// https://facebook.github.io/react-native/docs/native-components-ios.html#properties
RCT_EXPORT_VIEW_PROPERTY("exampleProp", NSString)

@end
