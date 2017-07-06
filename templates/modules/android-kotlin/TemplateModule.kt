//  Created by react-native-create-bridge

package com.{{app}}.{{packageName}}

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

import java.util.Map

class {{template}}Module(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    init {
        // Here we're saving the context we passed into the constructor to a variable so we can emit events
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        reactContext = context
    }

    override fun getName(): String {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS
    }

    override fun getConstants(): Map<String, Any>? {
        // Export any constants to be used in your native module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        val reactConstants = Map<String, Any>()
        constants.put("EXAMPLE_CONSTANT", "example")

        return constants
    }

    @ReactMethod
    fun exampleMethod () {
        // An example native method that you will expose to React
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
    }

    companion object {
        val REACT_CLASS = "{{template}}"
        private var reactContext: ReactApplicationContext = null

        private fun emitDeviceEvent(eventName: String, eventData: WritableMap?) {
            // A method for emitting from the native side to JS
            // https://facebook.github.io/react-native/docs/native-modules-android.html#sending-events-to-javascript
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java).emit(eventName, eventData)
        }
    }
}
