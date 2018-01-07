package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class SocialMediaSmokeApplication extends AppCompatActivity {
    TextView textLQB, textLittleQuitBuddy;
    Typeface tfc1;
    Button lgnButton, sgnButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_social_media_smoke_application);
        textLittleQuitBuddy = (TextView) findViewById(R.id.textLittleQuitBuddy);
        textLQB = (TextView) findViewById(R.id.textLQB);
        tfc1 = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textLQB.setTypeface(tfc1);
        textLittleQuitBuddy.setTypeface(tfc1);

        lgnButton = (Button) findViewById(R.id.loginButton);
        lgnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(SocialMediaSmokeApplication.this,loginPage.class);
                startActivity(logInIntent);
            }
        });
        sgnButton = (Button) findViewById(R.id.signUpButton);
        sgnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent signUpIntent = new Intent(SocialMediaSmokeApplication.this, signUpPage.class);
                startActivity(signUpIntent);
            }
        });
    }
}
