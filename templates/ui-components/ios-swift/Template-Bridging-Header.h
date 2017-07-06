//  Created by react-native-create-bridge

//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

// import RCTViewManager
#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#elif __has_include(“RCTViewManager.h”)
#import “RCTViewManager.h”
#else
#import “React/RCTViewManager.h” // Required when used as a Pod in a Swift project
#endif