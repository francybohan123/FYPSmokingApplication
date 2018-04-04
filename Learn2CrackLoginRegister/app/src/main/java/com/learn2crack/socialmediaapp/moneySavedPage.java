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
import com.learn2crack.healthTrackerSection.healthTrackerPage;
import com.learn2crack.model.Response;
import com.learn2crack.model.User;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.utils.Constants;
import java.io.IOException;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

public class moneySavedPage extends AppCompatActivity {

    TextView textviewMoneySaved;
    private ProgressBar mProgressbar;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Money Saved");
        Toast.makeText(moneySavedPage.this, "Think of what you can do with all this money!", Toast.LENGTH_SHORT).show();
        setContentView(R.layout.activity_money_saved_page);
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

        textviewMoneySaved = (TextView) findViewById(R.id.tv_moneysaved);
        mProgressbar = (ProgressBar) findViewById(R.id.progressBar);
    }

    private void loadProfile() {

        mSubscriptions.add(NetworkUtil.getRetrofit(mToken).getProfile(mEmail)
                .observeOn(AndroidSchedulers.mainThread())
                //.unsubscribeOn(Schedulers.io())
                .subscribeOn(Schedulers.io())
                .subscribe(this::handleResponse, this::handleError));
    }

    private void handleResponse(User user) {

        mProgressbar.setVisibility(View.GONE);

        SimpleDateFormat myFormat = new SimpleDateFormat("yyyy/MM/dd");
        String inputString1 = user.getDateOfQuittingSmoking();

        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Date today = Calendar.getInstance().getTime();
        String reportDate = dateFormat.format(today);

        String pricePerPacket = user.getPricePerPacket();
        double pricePerPacketDouble = Double.parseDouble(pricePerPacket);

        String numberSmokedPerDay = user.getNumberSmokedPerDay();
        int numberSmokedPerDayIngeter = Integer.parseInt(numberSmokedPerDay);

        String numberPerPacket = user.getNumberPerPacket();
        int numberPerPacketInteger = Integer.parseInt(numberPerPacket);

        try {
            Date date1 = myFormat.parse(inputString1);
            Date date2 = myFormat.parse(reportDate);
            long diff = date2.getTime() - date1.getTime(); //8118000000

            double days = TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
            double numberOfDays = (diff / (1000 * 60 * 60 * 24)); //93
            double priceOfOneCigarette = (pricePerPacketDouble / numberPerPacketInteger);
            double pricePerDayOfSmoking = (priceOfOneCigarette * numberSmokedPerDayIngeter);
            double totalPrice = (numberOfDays * pricePerDayOfSmoking);

            DecimalFormat df = new DecimalFormat("#.00");
            String decimalPlaceConverter = df.format(totalPrice);

            String totalAccumulatedSmokingPrice = String.valueOf(decimalPlaceConverter);
            textviewMoneySaved.setText("\u20ac" + totalAccumulatedSmokingPrice);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    private void handleError(Throwable error) {

        mProgressbar.setVisibility(View.GONE);

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

        Snackbar.make(findViewById(R.id.activity_money_saved_page),message,Snackbar.LENGTH_SHORT).show();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}
