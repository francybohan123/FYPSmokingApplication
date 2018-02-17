package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class wouldYouLikeToLogOutPage extends AppCompatActivity {
    Button yesLogOutButton, noDontLogOutButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_would_you_like_to_log_out_page);

        yesLogOutButton = (Button) findViewById(R.id.yesLogOutButton);
        yesLogOutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(wouldYouLikeToLogOutPage.this,SocialMediaSmokeApplication.class);
                startActivity(logInIntent);
            }
        });
        noDontLogOutButton = (Button) findViewById(R.id.noDontLogOutButton);
        noDontLogOutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent signUpIntent = new Intent(wouldYouLikeToLogOutPage.this, mainMenuPage.class);
                startActivity(signUpIntent);
            }
        });
    }
}
