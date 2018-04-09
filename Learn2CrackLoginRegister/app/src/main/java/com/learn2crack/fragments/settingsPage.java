package com.learn2crack.fragments;

import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TextInputLayout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.learn2crack.R;
import com.learn2crack.model.Response;
import com.learn2crack.model.User;
import com.learn2crack.network.NetworkUtil;
import com.learn2crack.socialmediaapp.mainMenuPage;

import java.io.IOException;
import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

import static com.learn2crack.utils.Validation.validateDateOfQuittingSmoking;

public class settingsPage extends Fragment {

    public static final String TAG = settingsPage.class.getSimpleName();

    private EditText mEtResetDateOfQuittingSmoking;
    private Button   mBtResetApplication;
    private TextInputLayout mTiResetDateOfQuittingSmoking;
    private TextView mTvLogin;
    private ProgressBar mProgressbar;
    private CompositeSubscription mSubscriptions;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        getActivity().setTitle("Sign Up");
        View view = inflater.inflate(R.layout.fragment_register,container,false);
        mSubscriptions = new CompositeSubscription();
        initViews(view);
        return view;
    }

    private void initViews(View v) {

        mEtResetDateOfQuittingSmoking = (EditText) v.findViewById(R.id.et_resetdateofquittingsmoking);
        mBtResetApplication = (Button) v.findViewById(R.id.btn_register);
        mTiResetDateOfQuittingSmoking = (TextInputLayout) v.findViewById(R.id.ti_resetdateofquittingsmoking);
        mProgressbar = (ProgressBar) v.findViewById(R.id.progress);
        mBtResetApplication.setOnClickListener(view -> register());
    }

    private void register() {

        setError();
        String resetDateOfQuittingSmoking = mEtResetDateOfQuittingSmoking.getText().toString();
        int err = 0;


        if(!validateDateOfQuittingSmoking(resetDateOfQuittingSmoking)){

            err++;
            mTiResetDateOfQuittingSmoking.setError("Date of quitting smoking does not match date format!");
        }

        if (err == 0) {

            User user = new User();
            user.setDateOfQuittingSmoking(resetDateOfQuittingSmoking);
            Intent intent = new Intent();
            intent.setClass(getActivity(), mainMenuPage.class);
            getActivity().startActivity(intent);

            mProgressbar.setVisibility(View.VISIBLE);
            registerProcess(user);

        } else {

            showSnackBarMessage("Enter Valid Details !");
        }
    }

    private void setError() {

        mTiResetDateOfQuittingSmoking.setError(null);
    }

    private void registerProcess(User user) {

        mSubscriptions.add(NetworkUtil.getRetrofit().register(user)
                .observeOn(AndroidSchedulers.mainThread())
                .unsubscribeOn(Schedulers.io())
                .subscribeOn(Schedulers.io())
                .subscribe(this::handleResponse,this::handleError));
    }

    private void handleResponse(Response response) {

        mProgressbar.setVisibility(View.GONE);
        showSnackBarMessage(response.getMessage());
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

        if (getView() != null) {

            Snackbar.make(getView(),message,Snackbar.LENGTH_SHORT).show();
        }
    }

    private void goToLogin(){

        FragmentTransaction ft = getFragmentManager().beginTransaction();
        settingsPage fragment = new settingsPage();
        ft.replace(R.id.fragmentFrame, fragment, settingsPage.TAG);
        ft.commit();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}