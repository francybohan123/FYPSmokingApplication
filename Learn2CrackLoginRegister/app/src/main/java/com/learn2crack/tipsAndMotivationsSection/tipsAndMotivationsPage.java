package com.learn2crack.tipsAndMotivationsSection;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import com.learn2crack.R;

public class tipsAndMotivationsPage extends AppCompatActivity {

    TextView mTvTipsAndMots;
    LinearLayout background;
    randomTipsAndMots tipsMots = new randomTipsAndMots();
    backgrounds backs = new backgrounds();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Tips And Motivations");
        Toast.makeText(tipsAndMotivationsPage.this, "Some tips to get you through the day!", Toast.LENGTH_SHORT).show();
        setContentView(R.layout.activity_tips_and_motivations);
        background = (LinearLayout) findViewById(R.id.activity_tips_and_motivations);
        mTvTipsAndMots = (TextView) findViewById(R.id.mTvTipsAndMots);
        background.setBackgroundColor(getResources().getColor(backs.getBackground()));
        background.setOnTouchListener(new OnSwipeTouchListener(this)
        {
            public void onSwipeRight() {
                prev();
            }

            public void onSwipeLeft() {
                next();
            }

            public void onSwipeUp() {
            }

            public void onSwipeDown() {
            }
        });
    }

    private void next() {
        mTvTipsAndMots.setText(tipsMots.nextTipOrMotivation());
        background.setBackgroundColor(getResources().getColor(backs.getBackground()));
    }

    private void prev() {
        mTvTipsAndMots.setText(tipsMots.previousTipOrMotivation());
        background.setBackgroundColor(getResources().getColor(backs.getBackground()));
    }

    public void generateTipOrMot(View view){

        next();
    }
}