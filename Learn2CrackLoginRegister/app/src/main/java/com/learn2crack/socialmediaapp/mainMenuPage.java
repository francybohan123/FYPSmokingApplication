package com.learn2crack.socialmediaapp;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.healthTrackerSection.healthTrackerPage;
import com.learn2crack.tipsAndMotivationsSection.tipsAndMotivationsPage;
import com.learn2crack.utils.Constants;
import android.content.Intent;
import android.graphics.Typeface;
import android.widget.ImageButton;
import android.widget.ProgressBar;
import android.widget.TextView;

import rx.subscriptions.CompositeSubscription;

public class mainMenuPage extends AppCompatActivity {

    public static final String TAG = ProfileActivity.class.getSimpleName();

    TextView textMediumLogIn, textLargeLogoLQB;
    Typeface value;
    private ImageButton profileButton;
    private ImageButton moneySavedButton;
    private ImageButton cigarettesPassedButton;
    private ImageButton daysSinceQuittingButton;
    private ImageButton healthTrackerButton;
    private ImageButton tipsAndMotivationsButton;
    private ImageButton settingsButton;
    private ImageButton logoutButton;
    private ProgressBar mProgressbar;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Main Menu");
        setContentView(R.layout.activity_main_menu_page);
        mSubscriptions = new CompositeSubscription();
        textMediumLogIn = (TextView) findViewById(R.id.textMediumLogIn);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(),"MTCORSVA.ttf");
        textMediumLogIn.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
        initSharedPreferences();
        initViews();
    }

    private void initViews() {

        mProgressbar = (ProgressBar) findViewById(R.id.progress);
        profileButton = (ImageButton) findViewById(R.id.mBtprofile);
        moneySavedButton = (ImageButton) findViewById(R.id.mBtMoneySaved);
        cigarettesPassedButton = (ImageButton) findViewById(R.id.mBtCigarettesPassed);
        daysSinceQuittingButton = (ImageButton) findViewById(R.id.mBtDaysSinceQuitting);
        healthTrackerButton = (ImageButton) findViewById(R.id.mBtHealthTracker);
        tipsAndMotivationsButton = (ImageButton) findViewById(R.id.mBtTipsAndMotivations);
        settingsButton = (ImageButton) findViewById(R.id.mBtSettings);
        logoutButton = (ImageButton) findViewById(R.id.mBtLogout);
        profileButton.setOnClickListener(view -> profile());
        moneySavedButton.setOnClickListener(view -> moneySaved());
        cigarettesPassedButton.setOnClickListener(view -> cigarettesPassed());
        daysSinceQuittingButton.setOnClickListener(view -> daysSinceQuitting());
        healthTrackerButton.setOnClickListener(view -> healthTracker());
        tipsAndMotivationsButton.setOnClickListener(view -> tipsAndMotivations());
        settingsButton.setOnClickListener(view -> settings());
        logoutButton.setOnClickListener(view -> logout());
    }

    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }

    private void profile(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, ProfileActivity.class);
        startActivity(profileButtonIntent);
    }

    private void moneySaved(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, moneySavedPage.class);
        startActivity(profileButtonIntent);
    }

    private void cigarettesPassed(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
        startActivity(profileButtonIntent);
    }

    private void daysSinceQuitting(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, daysSinceQuittingPage.class);
        startActivity(profileButtonIntent);
    }

    private void healthTracker(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, healthTrackerPage.class);
        startActivity(profileButtonIntent);
    }

    private void tipsAndMotivations(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, tipsAndMotivationsPage.class);
        startActivity(profileButtonIntent);
    }

    private void settings(){

        Intent profileButtonIntent = new Intent(mainMenuPage.this, settingsPage.class);
        startActivity(profileButtonIntent);
    }

    public void logout() {

        SharedPreferences.Editor editor = mSharedPreferences.edit();
        editor.putString(Constants.EMAIL,"");
        editor.putString(Constants.TOKEN,"");
        editor.apply();
        Intent profileButtonIntent = new Intent(mainMenuPage.this, welcomePage.class);
        startActivity(profileButtonIntent);
        finish();
    }

    @Override
    public void onBackPressed(){
        Intent logoutIntent = new Intent(mainMenuPage.this, wouldYouLikeToLogOutPage.class);
        startActivity(logoutIntent);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}


