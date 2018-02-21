package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.learn2crack.MainActivity;
import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.fragments.LoginFragment;
import com.learn2crack.fragments.RegisterFragment;

public class welcomePage extends AppCompatActivity {
    TextView textLQB, textLittleQuitBuddy;
    Typeface tfc1;
    Button continueButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome_page);
        textLittleQuitBuddy = (TextView) findViewById(R.id.textLittleQuitBuddy);
        textLQB = (TextView) findViewById(R.id.textLQB);
        //tfc1 = Typeface.createFromAsset(getAssets(),"fonts/MTCORSVA.ttf");
        textLQB.setTypeface(tfc1);
        textLittleQuitBuddy.setTypeface(tfc1);

        continueButton = (Button) findViewById(R.id.continueButton);
        continueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(welcomePage.this,MainActivity.class);
                startActivity(logInIntent);
            }
        });
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}

