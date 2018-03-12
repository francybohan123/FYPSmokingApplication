package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Typeface;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.learn2crack.MainActivity;
import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.utils.Constants;
import rx.subscriptions.CompositeSubscription;

public class welcomeClass extends AppCompatActivity {

    Button continueButton;
    private CompositeSubscription mSubscriptions;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mSubscriptions = new CompositeSubscription();
        setContentView(R.layout.activity_welcome_class);

        continueButton = (Button) findViewById(R.id.mBtwelcomeButton);
        continueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(welcomeClass.this, ProfileActivity.class);
                startActivity(logInIntent);
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}
