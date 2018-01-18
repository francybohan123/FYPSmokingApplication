package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import com.example.francisbohan.tipsandmotivations.tipOnePage;
import com.example.francisbohan.tipsandmotivations.tipTwoPage;
import com.example.francisbohan.tipsandmotivations.tipThreePage;

public class tipsAndMotivationsPage extends AppCompatActivity {
    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tips_and_motivations_page);
        listView = (ListView) findViewById(R.id.tipsAndMotsView);
        final String[] values = new String []{"Tip 1", "Tip 2", "Tip 3"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
            android.R.layout.activity_list_item,android.R.id.text1,values);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if (position == 0) {
                    Intent newIntent = new Intent(view.getContext(), tipOnePage.class);
                    startActivityForResult(newIntent, 0);
                }
                if (position == 1) {
                    Intent newIntent = new Intent(view.getContext(), tipTwoPage.class);
                    startActivityForResult(newIntent, 1);
                }
                if (position == 2) {
                    Intent newIntent = new Intent(view.getContext(), tipThreePage.class);
                    startActivityForResult(newIntent, 2);
                }
            }
        });
    }
}
