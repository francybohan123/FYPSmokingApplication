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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu_page);
        textMediumLogIn = (TextView) findViewById(R.id.textMediumLogIn);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(), "fonts/MTCORSVA.ttf");
        textMediumLogIn.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
        defineButtons();
    }

    public void defineButtons() {
        findViewById(R.id.profileButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.moneySavedButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.cigarettesPassedButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.daysSinceQuittingButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.healthTrackerButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.tipsMotivationButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.settingsButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.logoutButton).setOnClickListener(buttonClickListener);
    }

    private View.OnClickListener buttonClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.profileButton:
                    Intent profileButtonIntent = new Intent(mainMenuPage.this, profilePage.class);
                    startActivity(profileButtonIntent);
                    break;

                case R.id.moneySavedButton:
                    Intent moneyButtonIntent = new Intent(mainMenuPage.this, moneySavedPage.class);
                    startActivity(moneyButtonIntent);
                    break;

                case R.id.cigarettesPassedButton:
                    Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                    startActivity(cigarettesPassedIntent);
                    break;

                    case R.id.settingsButton:
                        Intent settingsIntent = new Intent(mainMenuPage.this, MainActivity.class);
                        startActivity(settingsIntent);
                        break;
            }
        }
    };
}

/*
            switch (view.getId()) {
                case R.id.cigarettesPassedButton:
                    Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                    startActivity(cigarettesPassedIntent);
                    break;
            }

            switch (view.getId()) {
                case R.id.daysSinceQuittingButton:
                    Intent daysSinceQuittingIntent = new Intent(mainMenuPage.this, daysSinceQuittingPage.class);
                    startActivity(daysSinceQuittingIntent);
                    break;
            }

            switch (view.getId()) {
                case R.id.healthTrackerButton:
                    Intent healthTrackerIntent = new Intent(mainMenuPage.this, healthTrackerPage.class);
                    startActivity(healthTrackerIntent);
                    break;
            }

            switch (view.getId()) {
                case R.id.tipsMotivationButton:
                    Intent tipsMotivationsIntent = new Intent(mainMenuPage.this, tipsAndMotivationsPage.class);
                    startActivity(tipsMotivationsIntent);
                    break;
            }

            switch (view.getId()) {
                case R.id.settingsButton:
                    Intent settingsIntent = new Intent(mainMenuPage.this, MainActivity.class);
                    startActivity(settingsIntent);
                    break;
            }

            switch (view.getId()) {
                case R.id.logoutButton:
                    Intent logoutIntent = new Intent(mainMenuPage.this, loginPage.class);
                    startActivity(logoutIntent);
                    break;
            }
        }
    };
}*/