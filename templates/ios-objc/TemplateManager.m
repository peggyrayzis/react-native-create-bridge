//  Created by react-native-create-bridge

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation {{template}}
@synthesize bridge = _bridge;

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  return @{
           @"EXAMPLE": @"example"
         };
}

// Return the native view that represents your React component
- (UIView *)view
{
  return [[UIView alloc] init];
}

// Export methods to a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_METHOD(exampleMethod)
{
  [self.emitMessageToRN:@"EXAMPLE_EVENT" :nil]
}

#pragma mark - Private methods

// Implement methods that you want to export to the native module
- (void) emitMessageToRN: (NSString *)eventName :(NSDictionary *)params {
  // The bridge eventDispatcher is used to send events from native to JS env
  // No documentation yet on DeviceEventEmitter: https://github.com/facebook/react-native/issues/2819
  [self.bridge.eventDispatcher sendAppEventWithName: eventName body: params];
}

@end
