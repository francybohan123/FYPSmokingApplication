package com.learn2crack.healthTrackerSection;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.learn2crack.R;

public class twentyFourHours extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("After 24 Hours");
        setContentView(R.layout.activity_twenty_four_hours);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
