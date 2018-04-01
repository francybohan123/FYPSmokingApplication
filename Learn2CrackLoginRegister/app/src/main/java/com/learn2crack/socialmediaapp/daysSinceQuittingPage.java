package com.learn2crack.socialmediaapp;

import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;
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

public class daysSinceQuittingPage extends AppCompatActivity {

    TextView textviewDaysSinceQuitting;
    private ProgressBar mProgressMonitor;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Days Since Quitting");
        setContentView(R.layout.activity_days_since_quitting_page);
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

        textviewDaysSinceQuitting = (TextView) findViewById(R.id.tv_dayssincequitting);
        mProgressMonitor = (ProgressBar) findViewById(R.id.progressMonitor);
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

        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Date today = Calendar.getInstance().getTime();
        String reportDate = dateFormat.format(today);

        SimpleDateFormat myFormat = new SimpleDateFormat("yyyy/MM/dd");
        String inputString1 = user.getDateOfQuittingSmoking();

        try {
            Date date1 = myFormat.parse(inputString1);
            Date date2 = myFormat.parse(reportDate);
            long diff = date2.getTime() - date1.getTime();
            double numberOfDays = (diff / (1000 * 60 * 60 * 24));
            int integerNumberDays = (int)numberOfDays;
            String totalNumberOfDaysOffCigarettes = String.valueOf(integerNumberDays);
            textviewDaysSinceQuitting.setText(totalNumberOfDaysOffCigarettes);

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

        Snackbar.make(findViewById(R.id.activity_days_since_quitting_page),message,Snackbar.LENGTH_SHORT).show();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}
