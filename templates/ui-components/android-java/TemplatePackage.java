//  Created by react-native-create-bridge

package com.{{app}}.{{packageName}};

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class {{template}}Package implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    {{javaPackage}}
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        // Register your native component's view manager
        // https://facebook.github.io/react-native/docs/native-components-android.html#4-register-the-viewmanager
        return Arrays.<ViewManager>asList(
            new {{template}}Manager()
        );
    }
}
