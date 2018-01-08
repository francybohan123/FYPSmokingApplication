package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class signUpRequirementsPage extends AppCompatActivity {
    Button mainMenuButton;
    TextView textMediumInfo, textLargeLogoLQB;
    Typeface value;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up_requirements_page);
        textMediumInfo = (TextView) findViewById(R.id.textMediumInfo);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textMediumInfo.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);

        mainMenuButton = (Button) findViewById(R.id.continueButton);
        mainMenuButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(signUpRequirementsPage.this, mainMenuPage.class);
                startActivity(logInIntent);
            }
        });
    }
}
