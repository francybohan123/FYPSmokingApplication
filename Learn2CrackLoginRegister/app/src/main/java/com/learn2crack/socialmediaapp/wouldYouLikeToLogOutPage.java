package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.learn2crack.MainActivity;
import com.learn2crack.R;
import com.learn2crack.utils.Constants;

public class wouldYouLikeToLogOutPage extends AppCompatActivity {
    Button yesLogOutButton, noDontLogOutButton;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private Button mBtLogout;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_would_you_like_to_log_out_page);

        yesLogOutButton = (Button) findViewById(R.id.mBtLogout);
        yesLogOutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent logInIntent = new Intent(wouldYouLikeToLogOutPage.this, MainActivity.class);
                startActivity(logInIntent);
                initViews();
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
    private void initViews() {

        mBtLogout = (Button) findViewById(R.id.btn_logout);
        mBtLogout.setOnClickListener(view -> logout());
    }
    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }
    public void logout() {

        SharedPreferences.Editor editor = mSharedPreferences.edit();
        editor.putString(Constants.EMAIL,"");
        editor.putString(Constants.TOKEN,"");
        editor.apply();
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
       // mSubscriptions.unsubscribe();
    }
}
