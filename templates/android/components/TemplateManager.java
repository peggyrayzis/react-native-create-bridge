package com.{{app}}.{{template}};

import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.facebook.react.uimanager.annotations.ReactProp;

public class {{template}}Manager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "{{template}}";

    @Override
    public String getName() {
        // Tell React the name of the module
        return REACT_CLASS;
    }

    @Override
    public View createViewInstance(ThemedReactContext context){
        // Create a view here
        return new View(context);
    }

    @ReactProp(name = "exampleProp")
    public void setExampleProp(View view, String prop) {
        // Set properties from React onto your native component
    }
}
