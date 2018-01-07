package com.example.francisbohan.socialmediaapp;

import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class SocialMediaSmokeApplication extends AppCompatActivity {
    TextView textLQB, textLittleQuitBuddy;
    Typeface tfc1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_social_media_smoke_application);
        textLittleQuitBuddy = (TextView) findViewById(R.id.textLittleQuitBuddy);
        textLQB = (TextView) findViewById(R.id.textLQB);
        tfc1 = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textLQB.setTypeface(tfc1);
        textLittleQuitBuddy.setTypeface(tfc1);
    }
}
