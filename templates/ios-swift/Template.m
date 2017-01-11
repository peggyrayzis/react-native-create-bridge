//
//  {{template}}.m
//
//  Created by react-native-create-bridge on {{date}}.

#import "RCTViewManager.h"
#import "RCTEventDispatcher.h"

// Use RCT_EXTERN_MODULE to export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
@interface RCT_EXTERN_MODULE({{template}}, {{bridgeType}})

// Use RCT_EXPORT_VIEW_PROPERTY to map properties to React Component props
// https://facebook.github.io/react-native/docs/native-components-ios.html#properties
RCT_EXPORT_VIEW_PROPERTY("exampleProperty", NSString)

// Use RCT_EXTERN_METHOD to export methods to a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
RCT_EXTERN_METHOD(exampleMethod)

@end
