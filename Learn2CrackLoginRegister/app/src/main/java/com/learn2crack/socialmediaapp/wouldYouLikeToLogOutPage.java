package com.learn2crack.socialmediaapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Typeface;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ProgressBar;
import android.widget.TextView;
import com.learn2crack.ProfileActivity;
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
    TextView tv_logoutQuestion;
    Typeface tfc1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Logging Out?");
        mSubscriptions = new CompositeSubscription();
        setContentView(R.layout.activity_would_you_like_to_log_out_page);
        mSubscriptions = new CompositeSubscription();
        tv_logoutQuestion = (TextView) findViewById(R.id.tv_logoutQuestion);
        tfc1 = Typeface.createFromAsset(getAssets(),"MTCORSVA.ttf");
        tv_logoutQuestion.setTypeface(tfc1);
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
        finish();
    }

    @Override
    public void onBackPressed(){
        Intent logoutIntent = new Intent(wouldYouLikeToLogOutPage.this, wouldYouLikeToLogOutPage.class);
        startActivity(logoutIntent);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}