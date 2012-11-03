package com.nun.denkitabetai;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

import org.apache.cordova.DroidGap;

public class DenkiTabetaiActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //super.setIntegerProperty("loadUrlTimeoutValue", 60000);
        super.loadUrl("file:///android_asset/www/index.html");
    }

    //@Override
    //public boolean onCreateOptionsMenu(Menu menu) {
        //getMenuInflater().inflate(R.menu.activity_denki_tabetai, menu);
      //  return true;
    //}
}
