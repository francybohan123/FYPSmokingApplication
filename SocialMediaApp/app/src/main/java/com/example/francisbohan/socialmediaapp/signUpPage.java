package com.example.francisbohan.socialmediaapp;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class signUpPage extends AppCompatActivity {

    TextView textMediumSignUp, textLargeLogoLQB;
    Typeface value;
    Button continueButton;
    EditText emailAddress, password, confirmPassword;
    //private TextView mResult;
    public String emailValidation, passwordToString;

    public signUpPage(){}

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up_page);
        emailAddress = (EditText) findViewById(R.id.emailAddress);
        password = (EditText) findViewById(R.id.password);
        confirmPassword = (EditText) findViewById(R.id.confirmPassword);
        textMediumSignUp = (TextView) findViewById(R.id.textMediumSignUp);
        textLargeLogoLQB = (TextView) findViewById(R.id.textLargeLogoLQB);
        value = Typeface.createFromAsset(getAssets(), "fonts/MTCORSVA.ttf");
        textMediumSignUp.setTypeface(value);
        textLargeLogoLQB.setTypeface(value);
        //mResult = (TextView) findViewById(R.id.tv_result);

        continueButton = (Button) findViewById(R.id.signUpContinueButton);
        continueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String validateEmail = "[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}" + "\\@" + "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}" + "(" + "\\." + "[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25}" + ")+";
                String validatePassword = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=\\S+$).{6,15}$";

            /*
                (?=.*[a-z])     : This matches the presence of at least one lowercase letter.
                (?=.*d)         : This matches the presence of at least one digit i.e. 0-9.
                (?=.*[!@#$%^&*]): This matches the presence of at least one special character.
                ((?=.*[A-Z])    : This matches the presence of at least one capital letter.
                {6,16}          : This limits the length of password from minimum 6 letters to maximum 15 letters.
            */

                emailValidation = emailAddress.getText().toString();
                Matcher emailAddressMatcher = Pattern.compile(validateEmail).matcher(emailValidation);

                passwordToString = password.getText().toString();
                String confirmPasswordToString = confirmPassword.getText().toString();
                Matcher passwordMatcher = Pattern.compile(validatePassword).matcher(passwordToString);

                if (emailAddressMatcher.matches() && passwordMatcher.matches() && passwordToString.equals(confirmPasswordToString)) {
                    Toast.makeText(getApplicationContext(), "Email & password entered correctly", Toast.LENGTH_LONG).show();
                    //make POST request
                    //new PostDataTask().execute("http://192.168.0.32:4000/api/status");
                    Intent signUpContinueIntent = new Intent(signUpPage.this, signUpRequirementsPage.class);
                    startActivity(signUpContinueIntent);
                }

                if (!passwordToString.equals(confirmPasswordToString)) {
                    Toast.makeText(getApplicationContext(), "Passwords do not match", Toast.LENGTH_LONG).show();
                }

                if (!passwordMatcher.matches()) {
                    Toast.makeText(getApplicationContext(), "Password format incorrect", Toast.LENGTH_LONG).show();
                    password.setError("Password must be 6-15 characters long and contain at least: 1 Uppercase, 1 Lowercase, 1 Numeral, 1 - !@#$%^&*");
                }

                if (!emailAddressMatcher.matches()) {
                    Toast.makeText(getApplicationContext(), "Email address entered incorrectly", Toast.LENGTH_LONG).show();
                    emailAddress.setError("e.g. johnsmith@gmail.com");


                } else {
                    Toast.makeText(getApplicationContext(), "Information entered incorrectly", Toast.LENGTH_LONG).show();
                }
                Log.d("LOG", emailValidation);
                Log.d("LOG", passwordToString);
                signUpRequirementsPage signUpPageVariable = new signUpRequirementsPage(emailValidation, passwordToString);
            }
        });
    }
}
