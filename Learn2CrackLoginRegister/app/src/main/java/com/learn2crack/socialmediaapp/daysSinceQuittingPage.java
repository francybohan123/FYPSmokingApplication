package com.learn2crack.socialmediaapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import com.learn2crack.R;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class daysSinceQuittingPage extends AppCompatActivity {

    TextView textviewDaysSinceQuitting;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Days Since Quitting");
        setContentView(R.layout.activity_days_since_quitting_page);

        textviewDaysSinceQuitting = (TextView) findViewById(R.id.tv_dayssincequitting);

        SimpleDateFormat myFormat = new SimpleDateFormat("yyyy/MM/dd");
        String inputString1 = "1997/01/23";
        String inputString2 = "1997/04/27"; //93 days

        try {
            Date date1 = myFormat.parse(inputString1);
            Date date2 = myFormat.parse(inputString2);
            long diff = date2.getTime() - date1.getTime();
            String differenceInDays = ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
            textviewDaysSinceQuitting.setText(differenceInDays);

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
