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
import com.learn2crack.socialmediaapp.welcomeClass;
import java.io.IOException;
import retrofit2.adapter.rxjava.HttpException;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;
import rx.subscriptions.CompositeSubscription;

import static com.learn2crack.utils.Validation.validateDateOfBirth;
import static com.learn2crack.utils.Validation.validateDateOfQuittingSmoking;
import static com.learn2crack.utils.Validation.validateEmail;
import static com.learn2crack.utils.Validation.validateEmptyDateOfBirth;
import static com.learn2crack.utils.Validation.validateEmptyDateOfQuittingSmoking;
import static com.learn2crack.utils.Validation.validateFields;
import static com.learn2crack.utils.Validation.validateNumberPerPacket;
import static com.learn2crack.utils.Validation.validateNumberSmokedPerDay;
import static com.learn2crack.utils.Validation.validatePassword;
import static com.learn2crack.utils.Validation.validatePricePerPacket;

public class RegisterFragment extends Fragment {

    public static final String TAG = RegisterFragment.class.getSimpleName();

    private EditText mEtName;
    private EditText mEtEmail;
    private EditText mEtPassword;
    private EditText mEtDateOfBirth;
    private EditText mEtDateOfQuittingSmoking;
    private EditText mEtNumberSmokedPerDay;
    private EditText mEtPricePerPacket;
    private EditText mEtNumberPerPacket;
    private Button   mBtRegister;
    private TextView mTvLogin;
    private TextInputLayout mTiName;
    private TextInputLayout mTiEmail;
    private TextInputLayout mTiPassword;
    private TextInputLayout mTiDateOfBirth;
    private TextInputLayout mTiDateOfQuittingSmoking;
    private TextInputLayout mTiNumberSmokedPerDay;
    private TextInputLayout mTiPricePerPacket;
    private TextInputLayout mTiNumberPerPacket;
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

        mEtName = (EditText) v.findViewById(R.id.et_name);
        mEtEmail = (EditText) v.findViewById(R.id.et_email);
        mEtPassword = (EditText) v.findViewById(R.id.et_password);
        mEtDateOfBirth = (EditText) v.findViewById(R.id.et_dateofbirth);
        mEtDateOfQuittingSmoking = (EditText) v.findViewById(R.id.et_dateofquittingsmoking);
        mEtNumberSmokedPerDay = (EditText) v.findViewById(R.id.et_numbersmokedperday);
        mEtPricePerPacket = (EditText) v.findViewById(R.id.et_priceperpacket);
        mEtNumberPerPacket = (EditText) v.findViewById(R.id.et_numberperpacket);
        mBtRegister = (Button) v.findViewById(R.id.btn_register);
        mTvLogin = (TextView) v.findViewById(R.id.tv_login);
        mTiName = (TextInputLayout) v.findViewById(R.id.ti_name);
        mTiEmail = (TextInputLayout) v.findViewById(R.id.ti_email);
        mTiPassword = (TextInputLayout) v.findViewById(R.id.ti_password);
        mTiDateOfBirth = (TextInputLayout) v.findViewById(R.id.ti_dateofbirth);
        mTiDateOfQuittingSmoking = (TextInputLayout) v.findViewById(R.id.ti_dateofquittingsmoking);
        mTiNumberSmokedPerDay = (TextInputLayout) v.findViewById(R.id.ti_numbersmokedperday);
        mTiPricePerPacket = (TextInputLayout) v.findViewById(R.id.ti_priceperpacket);
        mTiNumberPerPacket = (TextInputLayout) v.findViewById(R.id.ti_numberperpacket);
        mProgressbar = (ProgressBar) v.findViewById(R.id.progress);

        mBtRegister.setOnClickListener(view -> register());
        mTvLogin.setOnClickListener(view -> goToLogin());
    }

    private void register() {

        setError();

        String name = mEtName.getText().toString();
        String email = mEtEmail.getText().toString();
        String password = mEtPassword.getText().toString();
        String dateOfBirth = mEtDateOfBirth.getText().toString();
        String dateOfQuittingSmoking = mEtDateOfQuittingSmoking.getText().toString();
        String numberSmokedPerDay = mEtNumberSmokedPerDay.getText().toString();
        String pricePerPacket = mEtPricePerPacket.getText().toString();
        String numberPerPacket = mEtNumberPerPacket.getText().toString();

        int err = 0;

        if (!validateFields(name)) {

            err++;
            mTiName.setError("Name should not be empty!");
        }

        if (!validateEmail(email)) {

            err++;
            mTiEmail.setError("Email should be valid!");
        }

        if (!validateFields(password)) {

            err++;
            mTiPassword.setError("Password should not be empty!");
        }

        if(!validatePassword(password)){

            err++;
            mTiPassword.setError("Password must be 6-15 characters long and contain at least: 1 Uppercase, 1 Lowercase, 1 Numeral, 1 - !@#$%^&*");
        }

        if(!validateDateOfBirth(dateOfBirth)){

            err++;
            mTiDateOfBirth.setError("Date of birth does not match date format!");
        }

        if(!validateEmptyDateOfBirth(dateOfBirth)){

            err++;
            mTiDateOfBirth.setError("Date of birth should not be empty!");
        }

        if(!validateDateOfQuittingSmoking(dateOfQuittingSmoking)){

            err++;
            mTiDateOfQuittingSmoking.setError("Date of quitting smoking does not match date format!");
        }

        if(!validateEmptyDateOfQuittingSmoking(dateOfQuittingSmoking)){

            err++;
            mTiDateOfQuittingSmoking.setError("Date of quitting smoking should not be empty!");
        }

        if(!validateNumberSmokedPerDay(numberSmokedPerDay)){

            err++;
            mTiNumberSmokedPerDay.setError("Number smoked per day should not be empty!");
        }

        if(!validatePricePerPacket(pricePerPacket)){

            err++;
            mTiPricePerPacket.setError("Price per packet should not be empty!");
        }

        if(!validateNumberPerPacket(numberPerPacket)){

            err++;
            mTiNumberPerPacket.setError("Number per packet should not be empty!");
        }

        if (err == 0) {

            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);
            user.setDateOfBirth(dateOfBirth);
            user.setDateOfQuittingSmoking(dateOfQuittingSmoking);
            user.setNumberSmokedPerDay(numberSmokedPerDay);
            user.setPricePerPacket(pricePerPacket);
            user.setNumberPerPacket(numberPerPacket);
            Intent intent = new Intent();
            intent.setClass(getActivity(), welcomeClass.class);
            getActivity().startActivity(intent);

            mProgressbar.setVisibility(View.VISIBLE);
            registerProcess(user);

        } else {

            showSnackBarMessage("Enter Valid Details !");
        }
    }

    private void setError() {

        mTiName.setError(null);
        mTiEmail.setError(null);
        mTiPassword.setError(null);
        mTiDateOfBirth.setError(null);
        mTiDateOfQuittingSmoking.setError(null);
        mTiNumberSmokedPerDay.setError(null);
        mTiPricePerPacket.setError(null);
        mTiNumberPerPacket.setError(null);
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
                /*Response response = gson.fromJson(errorBody,Response.class);
                showSnackBarMessage(response.getMessage());*/

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
        LoginFragment fragment = new LoginFragment();
        ft.replace(R.id.fragmentFrame, fragment, LoginFragment.TAG);
        ft.commit();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mSubscriptions.unsubscribe();
    }
}
