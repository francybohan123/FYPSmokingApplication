package com.learn2crack.socialmediaapp;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.model.Response;
import com.learn2crack.model.User;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.utils.Constants;
import android.content.Intent;
import android.graphics.Typeface;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ProgressBar;
import android.widget.TextView;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.learn2crack.ProfileActivity;
import com.learn2crack.R;
import com.learn2crack.model.Response;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.socialmediaapp.mainMenuPage;
import com.learn2crack.utils.Constants;

import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

public class mainMenuPage extends AppCompatActivity {

    public static final String TAG = ProfileActivity.class.getSimpleName();

    TextView textMediumLogIn, textLargeLogoLQB;
    Typeface value;
    private TextView mTvName;
    private TextView mTvEmail;
    private TextView mTvDate;
    private Button mBtChangePassword;
    private Button mBtLogout;
    private ProgressBar mProgressbar;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu_page);
        mSubscriptions = new CompositeSubscription();
        textMediumLogIn = (TextView) findViewById(R.id.textMediumLogIn);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        //value = Typeface.createFromAsset(getAssets(), "assets/fonts/MTCORSVA.ttf");
        textMediumLogIn.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
        findViewById(R.id.mBtLogout).setOnClickListener(buttonClickListener);
        initSharedPreferences();
        loadProfile();
        defineButtons();
    }

    private void initViews() {


        mProgressbar = (ProgressBar) findViewById(R.id.progress);
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

    private void handleResponse(User user) {

        mProgressbar.setVisibility(View.GONE);
        mTvName.setText(user.getName());
        mTvEmail.setText(user.getEmail());
        mTvDate.setText(user.getCreated_at());
    }

    private void handleError(Throwable error) {

        //mProgressbar.setVisibility(View.GONE);

        if (error instanceof HttpException) {

            Gson gson = new GsonBuilder().create();

            try {

                String errorBody = ((HttpException) error).response().errorBody().string();
                Response response = gson.fromJson(errorBody,Response.class);
                //showSnackBarMessage(response.getMessage());

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {

            //showSnackBarMessage("Network Error !");
        }
    }

     public void defineButtons() {
        findViewById(R.id.profileButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.moneySavedButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.cigarettesPassedButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.daysSinceQuittingButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.healthTrackerButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.tipsMotivationButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.settingsButton).setOnClickListener(buttonClickListener);
        findViewById(R.id.mBtLogout).setOnClickListener(buttonClickListener);
    }

    private View.OnClickListener buttonClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.profileButton:
                    Intent profileButtonIntent = new Intent(mainMenuPage.this, ProfileActivity.class);
                    startActivity(profileButtonIntent);
                    break;

/*                case R.id.moneySavedButton:
                    Intent moneyButtonIntent = new Intent(mainMenuPage.this, moneySavedPage.class);
                    startActivity(moneyButtonIntent);
                    break;

                case R.id.cigarettesPassedButton:
                    Intent cigarettesPassedIntent = new Intent(mainMenuPage.this, cigarettesPassedPage.class);
                    startActivity(cigarettesPassedIntent);
                    break;

                case R.id.daysSinceQuittingButton:
                    Intent daysSinceQuittingIntent = new Intent(mainMenuPage.this, daysSinceQuittingPage.class);
                    startActivity(daysSinceQuittingIntent);
                    break;

                case R.id.healthTrackerButton:
                    Intent healthTrackerIntent = new Intent(mainMenuPage.this, healthTrackerPage.class);
                    startActivity(healthTrackerIntent);
                    break;

                case R.id.tipsMotivationButton:
                    Intent tipsMotivationsIntent = new Intent(mainMenuPage.this, tipsAndMotivationsPage.class);
                    startActivity(tipsMotivationsIntent);
                    break;

                case R.id.settingsButton:
                    Intent settingsIntent = new Intent(mainMenuPage.this, MainActivity.class);
                    startActivity(settingsIntent);
                    break;*/

                case R.id.mBtLogout:
                    initViews();
                    break;
            }
        }
    };

    private void loadProfile() {

        mSubscriptions.add(NetworkUtil.getRetrofit(mToken).getProfile(mEmail)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribe(this::handleResponse,this::handleError));
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