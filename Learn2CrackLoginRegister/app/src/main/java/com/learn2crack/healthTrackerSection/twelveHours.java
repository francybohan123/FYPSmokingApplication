package com.learn2crack.healthTrackerSection;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.learn2crack.R;

public class twelveHours extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("After 12 Hours");
        setContentView(R.layout.activity_twelve_hours);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
