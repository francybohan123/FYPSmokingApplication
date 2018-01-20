package com.example.francisbohan.socialmediaapp;

        import android.content.Intent;
        import android.support.v7.app.AppCompatActivity;
        import android.os.Bundle;
        import android.view.View;
        import android.widget.AdapterView;
        import android.widget.ArrayAdapter;
        import android.widget.ListView;
        import com.example.francisbohan.healthtracker.healthTrackerProgressOne;
        import com.example.francisbohan.healthtracker.healthTrackerProgressTwo;
        import com.example.francisbohan.healthtracker.healthTrackerProgressThree;
        import com.example.francisbohan.healthtracker.healthTrackerProgressFour;

public class healthTrackerPage extends AppCompatActivity  {
    ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_health_tracker_page);
        listView = (ListView) findViewById(R.id.healthTrackerListView);
        final String[] values = new String []{"20 Minutes", "2 hours", "12 hours", "24 hours"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
                android.R.layout.activity_list_item,android.R.id.text1,values);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                if (position == 0) {
                    Intent newIntent = new Intent(view.getContext(), healthTrackerProgressOne.class);
                    startActivityForResult(newIntent, 0);
                }
                if (position == 1) {
                    Intent newIntent = new Intent(view.getContext(), healthTrackerProgressTwo.class);
                    startActivityForResult(newIntent, 1);
                }
                if (position == 2) {
                    Intent newIntent = new Intent(view.getContext(), healthTrackerProgressThree.class);
                    startActivityForResult(newIntent, 2);
                }
                if(position == 3){
                    Intent newIntent = new Intent(view.getContext(), healthTrackerProgressFour.class);
                    startActivityForResult(newIntent, 3);
                }
            }
        });
    }
}