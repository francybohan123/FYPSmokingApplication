package com.learn2crack.socialmediaapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.learn2crack.R;
import com.learn2crack.healthTrackerSection.healthTrackerPage;

public class settingsPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Settings");
        Toast.makeText(settingsPage.this, "Change things up!", Toast.LENGTH_SHORT).show();
        setContentView(R.layout.activity_settings_page);
    }
}
