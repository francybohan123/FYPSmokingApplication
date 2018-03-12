package com.learn2crack.socialmediaapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import com.learn2crack.R;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class moneySavedPage extends AppCompatActivity {

    TextView textviewMoneySaved;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_money_saved_page);

        double pricePerPacket = 12.50;
        int numberPerPacket = 20;
        int numberSmokedPerDay = 15;

        textviewMoneySaved = (TextView) findViewById(R.id.tv_moneysaved);

        SimpleDateFormat myFormat = new SimpleDateFormat("yyyy/MM/dd");
        String inputString1 = "1997/01/23";
        String inputString2 = "1997/04/27";

        try {
            Date date1 = myFormat.parse(inputString1);
            Date date2 = myFormat.parse(inputString2);
            long diff = date2.getTime() - date1.getTime(); //8118000000
            //String differenceInDays = ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));

            double days = TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
            double numberOfDays = (diff / (1000*60*60*24)); //93
            double priceOfOneCigarette = (pricePerPacket / numberPerPacket);
            double pricePerDayOfSmoking = (priceOfOneCigarette * numberSmokedPerDay);
            double totalPrice = (numberOfDays * pricePerDayOfSmoking);

            DecimalFormat df = new DecimalFormat("#.00");
            String decimalPlaceConverter = df.format(totalPrice);

            String totalAccumulatedSmokingPrice = String.valueOf(decimalPlaceConverter);
            textviewMoneySaved.setText(totalAccumulatedSmokingPrice);

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}