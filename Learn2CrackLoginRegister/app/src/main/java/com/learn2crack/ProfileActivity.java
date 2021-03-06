package com.learn2crack;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.learn2crack.chat.chatRoom;
import com.learn2crack.fragments.ChangePasswordDialog;
import com.learn2crack.model.User;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.socialmediaapp.mainMenuPage;
import com.learn2crack.utils.Constants;
import java.io.IOException;
import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

public class ProfileActivity extends AppCompatActivity implements ChangePasswordDialog.Listener {

    public static final String TAG = ProfileActivity.class.getSimpleName();

    private TextView mTvName;
    private TextView mTvEmail;
    private TextView mTvDate;
    private TextView mTvDateOfBirth;
    private TextView mTvDateOfQuittingSmoking;
    private TextView mTvNumberSmokedPerDay;
    private TextView mTvPricePerPacket;
    private TextView mTvNumberPerPacket;
    private Button mBtMainMenu;
    private Button mBtchatRoom;
    private Button mBtChangePassword;
    private ProgressBar mProgressbar;
    private SharedPreferences mSharedPreferences;
    private String mToken;
    private String mEmail;
    private CompositeSubscription mSubscriptions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTitle("Profile");
        setContentView(R.layout.activity_profile);
        mSubscriptions = new CompositeSubscription();
        initViews();
        initSharedPreferences();
        loadProfile();
    }

    private void initViews() {

        mTvName = (TextView) findViewById(R.id.tv_name);
        mTvEmail = (TextView) findViewById(R.id.tv_email);
        mTvDate = (TextView) findViewById(R.id.tv_date);
        mTvDateOfBirth = (TextView) findViewById(R.id.tv_dateofbirth);
        mTvDateOfQuittingSmoking = (TextView) findViewById(R.id.tv_dateofquittingsmoking);
        mBtMainMenu = (Button) findViewById(R.id.mBtMainMenu);
        mBtchatRoom = (Button) findViewById(R.id.mBtchatRoom);
        mBtChangePassword = (Button) findViewById(R.id.btn_change_password);
        mProgressbar = (ProgressBar) findViewById(R.id.progress);
        mBtMainMenu.setOnClickListener(view -> mainMenu());
        mBtchatRoom.setOnClickListener(view -> chatRoom());
        mBtChangePassword.setOnClickListener(view -> showDialog());
    }

    private void initSharedPreferences() {

        mSharedPreferences = PreferenceManager.getDefaultSharedPreferences(this);
        mToken = mSharedPreferences.getString(Constants.TOKEN,"");
        mEmail = mSharedPreferences.getString(Constants.EMAIL,"");
    }

    private void mainMenu(){
        Intent logInIntent = new Intent(ProfileActivity.this,mainMenuPage.class);
        startActivity(logInIntent);
    }

    private void chatRoom(){
        Intent logInIntent = new Intent(ProfileActivity.this,chatRoom.class);
        startActivity(logInIntent);
    }

    private void showDialog(){

        ChangePasswordDialog fragment = new ChangePasswordDialog();

        Bundle bundle = new Bundle();
        bundle.putString(Constants.EMAIL, mEmail);
        bundle.putString(Constants.TOKEN,mToken);
        fragment.setArguments(bundle);

        fragment.show(getFragmentManager(), ChangePasswordDialog.TAG);
    }

    private void loadProfile() {

        mSubscriptions.add(NetworkUtil.getRetrofit(mToken).getProfile(mEmail)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribe(this::handleResponse,this::handleError));
    }

    private void handleResponse(User user) {

        mProgressbar.setVisibility(View.GONE);
        String str = user.getName();
        String cap = str.substring(0, 1).toUpperCase() + str.substring(1);
        mTvName.setText(cap);
        mTvEmail.setText(user.getEmail());
        mTvDateOfBirth.setText(user.getDateOfBirth());
        mTvDateOfQuittingSmoking.setText(user.getDateOfQuittingSmoking());
        mTvDate.setText(user.getCreated_at());
    }

    private void handleError(Throwable error) {

        mProgressbar.setVisibility(View.GONE);

        if (error instanceof HttpException) {

            Gson gson = new GsonBuilder().create();

            try {

                String errorBody = ((HttpException) error).response().errorBody().string();

            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {

            showSnackBarMessage("Network Error !");
        }
    }

    private void showSnackBarMessage(String message) {

        Snackbar.make(findViewById(R.id.activity_profile),message,Snackbar.LENGTH_SHORT).show();
    }

    @Override
    public void onBackPressed(){}

    @Override
    public void onPasswordChanged() {

        showSnackBarMessage("Password Changed Successfully!");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}