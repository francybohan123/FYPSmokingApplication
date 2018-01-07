package com.example.francisbohan.socialmediaapp;

import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import java.lang.reflect.Type;

public class loginPage extends AppCompatActivity {
    TextView textMediumLogIn, textLargeLogoLQB;
    Typeface value;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_page);
        textMediumLogIn = (TextView) findViewById(R.id.textMediumLogIn);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textMediumLogIn.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
    }
}