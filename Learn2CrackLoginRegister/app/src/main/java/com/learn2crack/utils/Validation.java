package com.learn2crack.utils;

import android.text.TextUtils;
import android.util.Patterns;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Validation {


    public static boolean validateFields(String name){

        if (TextUtils.isEmpty(name)) {

            return false;

        } else {

            return true;
        }
    }

    public static boolean validateEmail(String string) {

        if (TextUtils.isEmpty(string) || !Patterns.EMAIL_ADDRESS.matcher(string).matches()) {

            return false;

        } else {

            return  true;
        }
    }

    public static boolean validatePassword(String password) {

        String validatePassword = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=\\S+$).{6,15}$";
        Matcher dobMatcher = Pattern.compile(validatePassword).matcher(password);

        if(TextUtils.isEmpty(password) || !dobMatcher.matches()) {

            return false;

        }else {

            return true;
        }
    }


    public static boolean validateDateOfBirth(String dateOfBirth) {

        String validateDate = "((19|20)\\d\\d)/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])";
        Matcher dobMatcher = Pattern.compile(validateDate).matcher(dateOfBirth);

        if(TextUtils.isEmpty(dateOfBirth) || !dobMatcher.matches()) {

            return false;

        }else {

            return true;
        }
    }

    public static boolean validateEmptyDateOfBirth(String dateOfBirth) {

        if (TextUtils.isEmpty(dateOfBirth)) {

            return false;

        } else {

            return true;
        }
    }

    public static boolean validateDateOfQuittingSmoking(String dateOfQuittingSmoking) {

        String validateDate = "((19|20)\\d\\d)/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])";
        Matcher dobMatcher = Pattern.compile(validateDate).matcher(dateOfQuittingSmoking);

        if(TextUtils.isEmpty(dateOfQuittingSmoking) || !dobMatcher.matches()) {

            return false;

        }else {

            return true;
        }
    }

    public static boolean validateEmptyDateOfQuittingSmoking(String dateOfQuittingSmoking) {

        if (TextUtils.isEmpty(dateOfQuittingSmoking)) {

            return false;

        } else {

            return true;
        }
    }

    public static boolean validateNumberSmokedPerDay(String numberSmokedPerDay){

        if (TextUtils.isEmpty(numberSmokedPerDay)) {

            return false;

        } else {

            return true;
        }
    }

    public static boolean validatePricePerPacket(String pricePerPacket){

        if (TextUtils.isEmpty(pricePerPacket)) {

            return false;

        } else {

            return true;
        }
    }

    public static boolean validateNumberPerPacket(String numberPerPacket){

        if (TextUtils.isEmpty(numberPerPacket)) {

            return false;

        } else {

            return true;
        }
    }
}
