package com.socialnetwork;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {

//    private static  final  String LENGTH_SHORT = "LENGTH_SHORT";
//    private static  final  String LENGTH_LONG = "LENGTH_LONG";

    public ToastModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("LENGTH_SHORT", Toast.LENGTH_SHORT);
        constants.put("LENGTH_LONG", Toast.LENGTH_LONG);
        return constants;
    }

    @NonNull
    @Override
    public String getName() {

        return "ToastModule";
    }
    @ReactMethod
    public void showText(String text, int duration){ //function call in React Native :D
        Toast.makeText(getReactApplicationContext(), text, duration).show();
    }
}
