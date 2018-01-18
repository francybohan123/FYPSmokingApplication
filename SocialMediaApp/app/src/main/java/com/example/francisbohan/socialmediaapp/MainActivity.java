package com.example.francisbohan.socialmediaapp;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOError;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {
    private TextView mResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        mResult = (TextView) findViewById(R.id.tv_result);

        //make GET request
        //new GetDataTask().execute("http://192.168.1.104:4000/api/status");

        //make POST request
        //new PostDataTask().execute("http://192.168.1.104:4000/api/status");

        //make PUT request
        //new PutDataTask().execute("http://192.168.1.104:4000/api/status/5a5f824ddcea7f6406ac6974");

        //make DELETE request
        new DeleteDataTask().execute("http://192.168.1.104:4000/api/status/5a6118a36728e59431559acf");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }


    class GetDataTask extends AsyncTask<String, Void, String> {

        ProgressDialog progressDialog;

        @Override
        protected void onPreExecute() {

            super.onPreExecute();

            progressDialog = new ProgressDialog(MainActivity.this);
            progressDialog.setMessage("Loading data ... ");
            progressDialog.show();
        }

        @Override
        protected String doInBackground(String... params) {
            try {


                return getData(params[0]);
            } catch (IOException ex) {
                return "You're a fag!!!!";
            }
        }

        @Override
        protected void onPostExecute(String result) {
            super.onPostExecute(result);

            //set data response to textView
            mResult.setText(result);

            //cancel progress dialog
            if (progressDialog != null) {
                progressDialog.dismiss();
            }
        }

        private String getData(String urlPath) throws IOException {
            StringBuilder result = new StringBuilder();
            BufferedReader bufferedReader = null;

            //Initialise and config request, then connect to server
            try {
                URL url = new URL(urlPath);
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setReadTimeout(10000 /* milliseconds */);
                urlConnection.setConnectTimeout(10000 /* milliseconds */);
                urlConnection.setRequestMethod("GET");
                urlConnection.setRequestProperty("Content-Type", "application/json"); // set header
                urlConnection.connect();

                //Read data response from the server
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
            }
            return result.toString();
        }
    }

    class PostDataTask extends AsyncTask<String, Void, String>{

        ProgressDialog progressDialog;

        @Override
        protected void onPreExecute(){
            super.onPreExecute();

            progressDialog = new ProgressDialog(MainActivity.this);
            progressDialog.setMessage("Inserting data ... ");
            progressDialog.show();
        }

        @Override
        protected String doInBackground(String... params){

            try{
                return postData(params[0]);
            }catch(IOException ex){
                return "You're a fag !!";
            }catch(JSONException ex){
                return "You're really a fag!!";
            }
        }

        @Override
        protected void onPostExecute(String result){
            super.onPostExecute(result);

            mResult.setText(result);

            if(progressDialog != null){
                progressDialog.dismiss();
            }
        }

        private String postData(String urlPath) throws IOException, JSONException{
            /*
        firstName: String,
        surname: String,
        emailAddress: String,
        dateOfBirth: Date,
        dateOfQuittingSmoking: Date,
        amountSmokedPerDay: Number,
        amountPerPacket: Number,
        pricePerPacket: Number,
        */

            StringBuilder result = new StringBuilder();
            BufferedWriter bufferedWriter = null;
            BufferedReader bufferedReader = null;

            try{
                //Create data to send to server
                JSONObject dataToSend = new JSONObject();
                dataToSend.put("firstName", "Francis");
                dataToSend.put("surname", "Bohan");
                dataToSend.put("emailAddress", "fortlakefarmhouse@gmail.com");
                dataToSend.put("dateOfBirth", "1953-11-17");
                dataToSend.put("dateOfQuitting", "2017-05-11");
                dataToSend.put("amountSmokedPerDay", 40);
                dataToSend.put("amountPerPacket", 20);
                dataToSend.put("pricePerPacket", 11.50);

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
                while((line = bufferedReader.readLine())!= null) {
                    result.append(line).append("\n");
                }
            }finally{
                    if (bufferedReader != null){
                        bufferedReader.close();
                    }
                    if(bufferedWriter != null){
                        bufferedWriter.close();
                    }
                }

            return result.toString();
        }
    }

    class PutDataTask extends AsyncTask<String, Void, String>{

        ProgressDialog progressDialog;

        @Override
        protected void onPreExecute(){
            super.onPreExecute();

            progressDialog = new ProgressDialog(MainActivity.this);
            progressDialog.setMessage("Updating data...");
            progressDialog.show();
        }

        @Override
        protected String doInBackground(String ... params){
            try{
                return putData(params[0]);
            }catch(IOException ex) {
                return "Network error!!!";
            }catch(JSONException ex) {
                return "Data invalid!";
            }
        }

        @Override
        protected void onPostExecute(String result){
            super.onPostExecute(result);

            mResult.setText(result);

            if(progressDialog != null){
                progressDialog.dismiss();
            }

        }

        private String putData(String urlPath) throws IOException, JSONException {

            BufferedWriter bufferedWriter = null;
            String result = null;

            try {
                //create data to update
                JSONObject dataToSend = new JSONObject();
                dataToSend.put("firstName", "Frank");
                dataToSend.put("surname", "Bohan");
                dataToSend.put("dateOfBirth", "1954-03-19");
                dataToSend.put("dateOfQuitting", "2017-05-11");
                dataToSend.put("amountSmokedPerDay", 50);
                dataToSend.put("amountPerPacket", 20);
                dataToSend.put("pricePerPacket", 11.50);

                //Initialise and config request, then connect to server
                URL url = new URL(urlPath);
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setReadTimeout(10000 /* milliseconds */);
                urlConnection.setConnectTimeout(10000 /* milliseconds */);
                urlConnection.setRequestMethod("PUT");
                urlConnection.setDoOutput(true); //enable output (body data)
                urlConnection.setRequestProperty("Content-Type", "application/json"); // set header
                urlConnection.connect();

                //Write data into the server
                OutputStream outputStream = urlConnection.getOutputStream();
                bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
                bufferedWriter.write(dataToSend.toString());
                bufferedWriter.flush();

                //Check update successful or not
                if (urlConnection.getResponseCode() == 200) {
                    return "Update successfully";
                } else {
                    return "Update failed!";
                }
            }finally {
                if(bufferedWriter != null){
                    bufferedWriter.close();
                }
            }
        }
    }
    class DeleteDataTask extends AsyncTask<String, Void, String>{

        ProgressDialog progressDialog;

        @Override
        protected void onPreExecute(){
            super.onPreExecute();

            progressDialog = new ProgressDialog(MainActivity.this);
            progressDialog.setMessage("Deleting data...");
            progressDialog.show();
        }

        @Override
        protected String doInBackground(String... params) {
            try{
                return deleteData(params[0]);
            }catch(IOException ex){
                return "Network error";
            }
        }

        @Override
        protected void onPostExecute(String result){
            super.onPostExecute(result);

            mResult.setText(result);

            if(progressDialog != null){
                progressDialog.dismiss();
            }
        }

        private String deleteData(String urlPath) throws IOException{

            String deleteResult = null;

            URL url = new URL(urlPath);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setReadTimeout(10000 /* milliseconds */);
            urlConnection.setConnectTimeout(10000 /* milliseconds */);
            urlConnection.setRequestMethod("DELETE");
            urlConnection.setRequestProperty("Content-Type", "application/json"); // set header
            urlConnection.connect();

            if(urlConnection.getResponseCode() == 204) {
                deleteResult = "Deleted successfully";
            }else{
                    deleteResult = "Delete failed";
            }
            return deleteResult;
        }
    }
}
