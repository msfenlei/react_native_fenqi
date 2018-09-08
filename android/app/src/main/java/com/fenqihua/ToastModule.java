package com.fenqihua;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Graceful Sun on 2018/8/30.
 * E-mail itzhishuaisun@sina.com
 */
public class ToastModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        stringObjectHashMap.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return stringObjectHashMap;
    }
    @ReactMethod
    public void show(String content,int durtion){
        Toast.makeText(getReactApplicationContext(), content, durtion).show();
    }
}
