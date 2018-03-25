package com.learn2crack.tipsAndMotivationsSection;

import com.learn2crack.R;

public class backgrounds {

    Integer colors[] = {

            R.color.alizarin,
            R.color.red,
            R.color.candyAppleRed,
            R.color.safteyOrange,
            R.color.chromeYellow,
            R.color.amber,
            R.color.yellow,
            R.color.lime,
            R.color.springBud,
            R.color.lawnGreen,
            R.color.darkPastelGreen,
            R.color.jade,
            R.color.carribeanGreen,
            R.color.turquoise,
            R.color.cerulean,
            R.color.dukeBlue,
            R.color.purpleHeart,
            R.color.violet,
            R.color.lavender,
            R.color.magenta
    };
    int colorNumber = -1;

    public int getBackground(){

        colorNumber++;
        try
        {
            return colors[colorNumber];
        }
        catch(Exception ex)
        {
            colorNumber = 0;
            return colors[colorNumber];
        }
    }
}
