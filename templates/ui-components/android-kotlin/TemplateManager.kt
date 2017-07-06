//  Created by react-native-create-bridge

package com.{{app}}.{{packageName}}

import android.view.View

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

import com.facebook.react.uimanager.annotations.ReactProp

class {{template}}Manager : SimpleViewManager<View>() {
    
    override fun getName(): String {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS
    }

    public override fun createViewInstance(context: ThemedReactContext): View {
        // Create a view here
        // https://facebook.github.io/react-native/docs/native-components-android.html#2-implement-method-createviewinstance
        return View(context)
    }

    @ReactProp(name = "exampleProp")
    fun setExampleProp(View view, String prop) {
        // Set properties from React onto your native component
        // https://facebook.github.io/react-native/docs/native-components-android.html#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation
    }

    companion object {
        val REACT_CLASS = "{{template}}"
    }
}
