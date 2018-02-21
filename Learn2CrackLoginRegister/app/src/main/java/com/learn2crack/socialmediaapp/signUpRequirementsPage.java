package com.learn2crack.socialmediaapp;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Typeface;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.learn2crack.R;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class signUpRequirementsPage extends AppCompatActivity {
    Button mainMenuButton;
    TextView textMediumInfo, textLargeLogoLQB;
    Typeface value;
    String emailAddress, password;
    String firstnameToDatabase, surnameToDatabase,dobToDatabase, dateOfQuittingSmokingToDatabase, numberSmokedPerDayToDatabase, numberPerPacketToDatabase, pricePerPacketToDatabase;
    EditText firstname, surname, dateOfBirth, dateOfQuittingSmoking, numberSmokedPerDay, numberPerPacket, pricePerPacket;

    public signUpRequirementsPage(){}

    public signUpRequirementsPage(String firstnameToDB, String surnameToDB, String DOBToDB, String dateQuitSmokingToDB, String numberSmokedPerDayToDB, String numberPerPacketToDB, String pricePerPacketToDB){
        firstnameToDatabase = firstnameToDB;
        surnameToDatabase = surnameToDB;
        dobToDatabase = DOBToDB;
        dateOfQuittingSmokingToDatabase = dateQuitSmokingToDB;
        numberSmokedPerDayToDatabase = numberSmokedPerDayToDB;
        numberPerPacketToDatabase = numberPerPacketToDB;
        pricePerPacketToDatabase = pricePerPacketToDB;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up_requirements_page);
        textMediumInfo = (TextView) findViewById(R.id.textMediumInfo);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(), "fonts/MTCORSVA.ttf");
        textMediumInfo.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);

        firstname = (EditText) findViewById(R.id.firstname);
        surname = (EditText) findViewById(R.id.surname);
        dateOfBirth = (EditText) findViewById(R.id.dateOfBirth);
        dateOfQuittingSmoking = (EditText) findViewById(R.id.dateOfQuittingSmoking);
        numberSmokedPerDay = (EditText) findViewById(R.id.numberSmokedPerDay);
        numberPerPacket = (EditText) findViewById(R.id.numberPerPacket);
        pricePerPacket = (EditText) findViewById(R.id.pricePerPacket);

        mainMenuButton = (Button) findViewById(R.id.continueButton);
        mainMenuButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String validateFirstname = "[A-Z][a-zA-Z]{3,15}";
                String validateSurname = "[A-Z][a-zA-Z]{3,15}";
                String validateDate = "((19|20)\\d\\d)/(0?[1-9]|1[012])/(0?[1-9]|[12][0-9]|3[01])";
                String validateNumberSmoked = "[0-9]{1,2}";
                String validateNumberPerPacket = "[0-9]{2,3}";
                String validatePrice = "[0-9]{2}+([.][0-9]{1,2})?";

                firstnameToDatabase = firstname.getText().toString();
                Matcher firstnameMatcher = Pattern.compile(validateFirstname).matcher(firstnameToDatabase);

                surnameToDatabase = surname.getText().toString();
                Matcher surnameMatcher = Pattern.compile(validateSurname).matcher(surnameToDatabase);

                dobToDatabase = dateOfBirth.getText().toString();
                Matcher dobMatcher = Pattern.compile(validateDate).matcher(dobToDatabase);

                dateOfQuittingSmokingToDatabase = dateOfQuittingSmoking.getText().toString();
                Matcher dateOfQuittingSmokingMatcher = Pattern.compile(validateDate).matcher(dateOfQuittingSmokingToDatabase);

                numberSmokedPerDayToDatabase = numberSmokedPerDay.getText().toString();
                Matcher numberSmokedPerDayMatcher = Pattern.compile(validateNumberSmoked).matcher(numberSmokedPerDayToDatabase);

                numberPerPacketToDatabase = numberPerPacket.getText().toString();
                Matcher numberPerPacketMatcher = Pattern.compile(validateNumberPerPacket).matcher(numberPerPacketToDatabase);

                pricePerPacketToDatabase = pricePerPacket.getText().toString();
                Matcher pricePerPacketMatcher = Pattern.compile(validatePrice).matcher(pricePerPacketToDatabase);

                if(firstnameMatcher.matches() && surnameMatcher.matches() && dobMatcher.matches() && dateOfQuittingSmokingMatcher.matches() && numberSmokedPerDayMatcher.matches() && numberPerPacketMatcher.matches() && pricePerPacketMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Credentials entered correctly", Toast.LENGTH_LONG).show();
                    Intent signUpContinueIntent = new Intent(signUpRequirementsPage.this, mainMenuPage.class);
                    new PostDataTask().execute("http://192.168.0.31:8080/");
                    startActivity(signUpContinueIntent);
                }
                if(!firstnameMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "First name entered incorrectly", Toast.LENGTH_LONG).show();
                    firstname.setError("First name must contain between 3 and 15 characters, all alphabetical");
                }

                if(!surnameMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Surname entered incorrectly", Toast.LENGTH_LONG).show();
                    surname.setError("Surname must contain between 3 and 15 characters, all alphabetical");
                }

                if(!dobMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Date of birth entered incorrectly", Toast.LENGTH_LONG).show();
                    dateOfBirth.setError("yyyy/mm/dd");
                }

                if(!dateOfQuittingSmokingMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Date of quitting entered incorrectly", Toast.LENGTH_LONG).show();
                    dateOfQuittingSmoking.setError("yyyy/mm/dd");
                }

                if(!numberSmokedPerDayMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Number of cigarettes smoked per day entered incorrectly", Toast.LENGTH_LONG).show();
                    numberSmokedPerDay.setError("Please enter the number of cigarettes you smoke per day");
                }

                if(!numberPerPacketMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Number of cigarettes per packet entered incorrectly", Toast.LENGTH_LONG).show();
                    numberPerPacket.setError("Please enter the amount in a full box of cigarettes");
                }

                if(!pricePerPacketMatcher.matches()){
                    Toast.makeText(getApplicationContext(), "Price per packet entered incorrectly", Toast.LENGTH_LONG).show();
                    pricePerPacket.setError("Please enter the price of a packet of cigarettes");
                }
                signUpRequirementsPage signUpVariables = new signUpRequirementsPage(firstnameToDatabase, surnameToDatabase, dobToDatabase, dateOfQuittingSmokingToDatabase, numberSmokedPerDayToDatabase, numberPerPacketToDatabase, pricePerPacketToDatabase);
            }
        });
    }
    class PostDataTask extends AsyncTask<String, Void, String> {

        ProgressDialog progressDialog;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            progressDialog = new ProgressDialog(signUpRequirementsPage.this);
            progressDialog.setMessage("Just a second ... ");
            progressDialog.show();
        }

        @Override
        protected String doInBackground(String... params) {
            try {
                return postData(params[0]);
            } catch (IOException ex) {
                return "Network Error !!";
            } catch (JSONException ex) {
                return "Error !!";
            }
        }

        @Override
        protected void onPostExecute(String result) {
            super.onPostExecute(result);
            if (progressDialog != null) {
                progressDialog.dismiss();
            }
        }

        private String postData(String urlPath) throws IOException, JSONException {

            StringBuilder result = new StringBuilder();
            BufferedWriter bufferedWriter = null;
            BufferedReader bufferedReader = null;

            try {
                //Create data to send to server
                JSONObject dataToSend = new JSONObject();
                dataToSend.put("firstname", firstnameToDatabase);
                dataToSend.put("surname", surnameToDatabase);
                dataToSend.put("dateOfBirth", dobToDatabase);
                dataToSend.put("dateOfQuittingSmoking", dateOfQuittingSmokingToDatabase);
                dataToSend.put("numberSmokedPerDay", numberSmokedPerDayToDatabase);
                dataToSend.put("numberPerPacket", numberPerPacketToDatabase);
                dataToSend.put("pricePerPacket", pricePerPacketToDatabase);
                URL url = new URL(urlPath);
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setReadTimeout(10000 /* milliseconds */);
                urlConnection.setConnectTimeout(10000 /* milliseconds */);
                urlConnection.setRequestMethod("POST");
                urlConnection.setDoOutput(true); //enable output (body data)
                urlConnection.setRequestProperty("Content-Type", "application/json"); // set header
                urlConnection.connect();

                //Write data into server
                OutputStream outputStream = urlConnection.getOutputStream();
                bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
                bufferedWriter.write(dataToSend.toString());
                bufferedWriter.flush();

                //Read data response from server
                InputStream inputStream = urlConnection.getInputStream();
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    result.append(line).append("\n");
                }
            } finally {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
                if (bufferedWriter != null) {
                    bufferedWriter.close();
                }
            }
            return result.toString();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}