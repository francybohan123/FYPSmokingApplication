package com.example.francisbohan.socialmediaapp;

import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class signUpPage extends AppCompatActivity {
    TextView textMediumSignUp, textLargeLogoLQB;
    Typeface value;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up_page);
        textMediumSignUp = (TextView) findViewById(R.id.textMediumSignUp);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textMediumSignUp.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
    }
}