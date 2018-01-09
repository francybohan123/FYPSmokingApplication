package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class mainMenuPage extends AppCompatActivity {
    TextView textMediumLogIn, textLargeLogoLQB;
    Typeface value;
    Button profileOption, moneySavedOption, cigarettesPassedOption, daysSinceQuittingOption, healthTrackerOption, tipsMotivationOption, settingsOption, logoutOption;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu_page);
        textMediumLogIn = (TextView) findViewById(R.id.textMediumLogIn);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(), "fonts/MTCORSVA.ttf");
        textMediumLogIn.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);

        profileOption = (Button) findViewById(R.id.profileButton);
        profileOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent profileIntent = new Intent(mainMenuPage.this, profilePage.class);
                startActivity(profileIntent);
            }
        });
        moneySavedOption = (Button) findViewById(R.id.moneySavedButton);
        moneySavedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent moneySavedIntent = new Intent(mainMenuPage.this, moneySavedPage.class);
                startActivity(moneySavedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
        cigarettesPassedOption = (Button) findViewById(R.id.cigarettesPassedButton);
        cigarettesPassedOption.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                startActivity(cigarettesPassedIntent);
            }
        });
    }
}
