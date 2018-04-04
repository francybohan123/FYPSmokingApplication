package com.learn2crack.socialmediaapp;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.learn2crack.R;
import com.learn2crack.model.Response;
import com.learn2crack.model.User;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.utils.Constants;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

public class cigarettesPassedPage extends AppCompatActivity {

    TextView textviewCigarettesPassed;
    private ProgressBar mProgressMonitor;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Cigarettes Passed");
        Toast.makeText(cigarettesPassedPage.this, "Look at all those cigarettes you've passed!", Toast.LENGTH_SHORT).show();
        setContentView(R.layout.activity_cigarettes_passed_page);
        mSubscriptions = new CompositeSubscription();
        initViews();
        initSharedPreferences();
        loadProfile();
    }

    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }

    private void initViews() {

        textviewCigarettesPassed = (TextView) findViewById(R.id.textviewCigarettesPassed);
        mProgressMonitor = (ProgressBar) findViewById(R.id.progressSlot);
    }

    private void loadProfile() {

        mSubscriptions.add(NetworkUtil.getRetrofit(mToken).getProfile(mEmail)
                .observeOn(AndroidSchedulers.mainThread())
                //.unsubscribeOn(Schedulers.io())
                .subscribeOn(Schedulers.io())
                .subscribe(this::handleResponse, this::handleError));
    }

    private void handleResponse(User user) {

        mProgressMonitor.setVisibility(View.GONE);
        SimpleDateFormat myFormat = new SimpleDateFormat("yyyy/MM/dd");
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Date today = Calendar.getInstance().getTime();
        String reportDate = dateFormat.format(today);
        String inputString1 = user.getDateOfQuittingSmoking();

        try {
            Date date1 = myFormat.parse(inputString1);
            Date date2 = myFormat.parse(reportDate);
            long diff = date2.getTime() - date1.getTime();

            double numberOfDays = (diff / (1000*60*60*24));
            String cigarettesPerDay = user.getNumberSmokedPerDay();
            double cigsPerDayInDoubleForm = Double.parseDouble(cigarettesPerDay);
            double totalNumberOfCigs = (cigsPerDayInDoubleForm * numberOfDays);
            int integerNumberCigarettes = (int)totalNumberOfCigs;
            String totalAccumulatedSmokingPrice = String.valueOf(integerNumberCigarettes);
            textviewCigarettesPassed.setText(totalAccumulatedSmokingPrice);

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    private void handleError(Throwable error) {

        mProgressMonitor.setVisibility(View.GONE);

        if (error instanceof HttpException) {
            Gson gson = new GsonBuilder().create();

            try {
                String errorBody = ((HttpException) error).response().errorBody().string();
                Response response = gson.fromJson(errorBody,Response.class);
                showSnackBarMessage(response.getMessage());

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            showSnackBarMessage("Network Error !");
        }
    }

    private void showSnackBarMessage(String message) {

        Snackbar.make(findViewById(R.id.activity_cigarettes_passed_page),message,Snackbar.LENGTH_SHORT).show();
    }

    @Override
    protected void onDestroy() {

        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}