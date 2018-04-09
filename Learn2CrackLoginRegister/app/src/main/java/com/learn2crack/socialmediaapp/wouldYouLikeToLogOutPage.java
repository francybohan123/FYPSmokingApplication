package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;
import com.learn2crack.R;
import com.learn2crack.utils.Constants;
import rx.subscriptions.CompositeSubscription;

public class wouldYouLikeToLogOutPage extends AppCompatActivity {
    private SharedPreferences mSharedPreferences;
    private ProgressBar mProgressbar;
    private String mToken;
    private String mEmail;
    private Button logoutButton;
    private Button noDontLogoutButton;
    private CompositeSubscription mSubscriptions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Logging Out?");
        Toast.makeText(wouldYouLikeToLogOutPage.this, "You're leaving us?", Toast.LENGTH_SHORT).show();
        mSubscriptions = new CompositeSubscription();
        setContentView(R.layout.activity_would_you_like_to_log_out_page);
        mSubscriptions = new CompositeSubscription();
        initSharedPreferences();
        initViews();
    }

    private void initViews() {

        mProgressbar = (ProgressBar) findViewById(R.id.progress);
        noDontLogoutButton = (Button) findViewById(R.id.mBtDontLogout);
        logoutButton = (Button) findViewById(R.id.mBtLogout);
        noDontLogoutButton.setOnClickListener(view -> backToMainMenu());
        logoutButton.setOnClickListener(view -> logout());
    }

    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }

    private void backToMainMenu(){

        Intent profileButtonIntent = new Intent(wouldYouLikeToLogOutPage.this, mainMenuPage.class);
        startActivity(profileButtonIntent);
    }

    public void logout() {

        SharedPreferences.Editor editor = mSharedPreferences.edit();
        editor.putString(Constants.EMAIL,"");
        editor.putString(Constants.TOKEN,"");
        editor.apply();
        Intent profileButtonIntent = new Intent(wouldYouLikeToLogOutPage.this, welcomePage.class);
        startActivity(profileButtonIntent);
        Toast.makeText(wouldYouLikeToLogOutPage.this, "See you next time!", Toast.LENGTH_LONG).show();
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}