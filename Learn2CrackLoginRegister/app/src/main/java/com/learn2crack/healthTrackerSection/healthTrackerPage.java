package com.learn2crack.healthTrackerSection;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.learn2crack.R;

public class healthTrackerPage extends AppCompatActivity {

    ListView listview;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Health Tracker");
        setContentView(R.layout.activity_health_tracker_page);
        listview = (ListView)findViewById(R.id.listview);
        String[] values = new String[]{"20 minutes","2 hours","12 hours", "24 hours", "48 hours", "72 hours", "2-3 weeks", "1-9 months", "1 year", "5 years", "10 years", "15 years"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
                android.R.layout.simple_list_item_1, android.R.id.text1, values);
        listview.setAdapter(adapter);
        listview.setOnItemClickListener(new AdapterView.OnItemClickListener(){

            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id){

                if(position == 0){
                    Intent intent = new Intent(view.getContext(), twentyMinutes.class);
                    startActivityForResult(intent, 0);
                }

                if(position == 1){
                    Intent intent = new Intent(view.getContext(), twoHours.class);
                    startActivityForResult(intent, 1);
                }

                if(position == 2){
                    Intent intent = new Intent(view.getContext(), twelveHours.class);
                    startActivityForResult(intent, 2);
                }

                if(position == 3){
                    Intent intent = new Intent(view.getContext(), twentyFourHours.class);
                    startActivityForResult(intent, 3);
                }

                if(position == 4){
                    Intent intent = new Intent(view.getContext(), fortyEightHours.class);
                    startActivityForResult(intent, 4);
                }

                if(position == 5){
                    Intent intent = new Intent(view.getContext(), seventyTwoHours.class);
                    startActivityForResult(intent, 5);
                }

                if(position == 6){
                    Intent intent = new Intent(view.getContext(), twoToThreeWeeks.class);
                    startActivityForResult(intent, 6);
                }

                if(position == 7){
                    Intent intent = new Intent(view.getContext(), oneToNineMonths.class);
                    startActivityForResult(intent, 7);
                }

                if(position == 8){
                    Intent intent = new Intent(view.getContext(), oneYear.class);
                    startActivityForResult(intent, 8);
                }

                if(position == 9){
                    Intent intent = new Intent(view.getContext(), fiveYears.class);
                    startActivityForResult(intent, 9);
                }

                if(position == 10){
                    Intent intent = new Intent(view.getContext(), tenYears.class);
                    startActivityForResult(intent, 10);
                }

                if(position == 11){
                    Intent intent = new Intent(view.getContext(), fifteenYears.class);
                    startActivityForResult(intent, 11);
                }
            }
        });
    }
}
