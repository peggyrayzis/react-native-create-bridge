//
//  {{template}}Manager.swift
//
//  Created by react-native-create-bridge on {{date}}.

import Foundation

@objc({{template}})
class {{template}}Manager : RCTViewManager {

  // Here is where you export any constants to be used in your native module
  override func constantsToExport() -> [String : Any]! {
    return [:]
  }

  // Here is where you will return the native view that represents your React component
  override func view() -> UIView! {
    return UIView()
  }

  // Here is where you will implement methods that you want to export to the native module
  @objc func exampleMethod() {
    // The bridge eventDispatcher is used to send events from native to JS env
    // No documentation yet on DeviceEventEmitter: https://github.com/facebook/react-native/issues/2819
    self.bridge.eventDispatcher().sendAppEvent(withName: "EXAMPLE_EVENT", body: nil)
  }
