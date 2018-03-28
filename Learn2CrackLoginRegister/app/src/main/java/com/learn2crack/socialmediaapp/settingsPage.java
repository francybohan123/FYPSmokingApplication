package com.learn2crack.socialmediaapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.learn2crack.R;

public class settingsPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Settings");
        setContentView(R.layout.activity_settings_page);
    }
}
