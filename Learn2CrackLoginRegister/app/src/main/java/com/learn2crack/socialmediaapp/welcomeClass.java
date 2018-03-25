package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Typeface;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.learn2crack.MainActivity;
import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.utils.Constants;
import rx.subscriptions.CompositeSubscription;

public class welcomeClass extends AppCompatActivity {

    Button profileButton, mainMenuButton;
    private SharedPreferences mSharedPreferences;
    private CompositeSubscription mSubscriptions;
    private ProgressBar mProgressbar;
    private String mToken;
    private String mEmail;
    TextView tv_welcomeNote;
    Typeface tfc1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome_class);
        setTitle("Welcome Note");
        tv_welcomeNote = (TextView) findViewById(R.id.tv_welcomeNote);
        tfc1 = Typeface.createFromAsset(getAssets(),"MTCORSVA.ttf");
        tv_welcomeNote.setTypeface(tfc1);
        mSubscriptions = new CompositeSubscription();
        initSharedPreferences();
        initViews();
    }


    private void initViews() {

        mProgressbar = (ProgressBar) findViewById(R.id.progress);
        profileButton = (Button) findViewById(R.id.mBtwelcomeButton);
        profileButton.setOnClickListener(view -> profile());
        mainMenuButton = (Button) findViewById(R.id.mBtMainMenu);
        mainMenuButton.setOnClickListener(view -> mainMenu());
    }

    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }

    private void profile(){

        Intent profileButtonIntent = new Intent(welcomeClass.this, ProfileActivity.class);
        startActivity(profileButtonIntent);
    }

    private void mainMenu(){

        Intent profileButtonIntent = new Intent(welcomeClass.this, mainMenuPage.class);
        startActivity(profileButtonIntent);
    }

    @Override
    public void onBackPressed(){
        Intent logoutIntent = new Intent(welcomeClass.this, wouldYouLikeToLogOutPage.class);
        startActivity(logoutIntent);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}


