package com.learn2crack.model;


import java.util.Date;

public class User {

    private String name;
    private String email;
    private String password;
    private String created_at;
    private String newPassword;
    private String token;
    private String dateOfBirth;
    private String dateOfQuittingSmoking;
    private String numberSmokedPerDay;
    private String numberPerPacket;
    private String pricePerPacket;

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

/*    public void setDateOfBirth(String dateOfBirth) {this.dateOfBirth = dateOfBirth; }

    public void setDateOfQuittingSmoking(String dateOfQuittingSmoking) {this.dateOfQuittingSmoking = dateOfQuittingSmoking; }

    public void setNumberSmokedPerDay(String numberSmokedPerDay) {this.numberSmokedPerDay = numberSmokedPerDay; }

    public void setNumberPerPacket(String numberPerPacket) {this.numberPerPacket = numberPerPacket; }

    public void setPricePerPacket(String pricePerPacket) {this.pricePerPacket = pricePerPacket; }*/

/*    public String getDateOfBirth() { return dateOfBirth; }

    public String getDateOfQuittingSmoking() {return dateOfQuittingSmoking; }

    public String getNumberSmokedPerDay() {return numberSmokedPerDay; }

    public String getNumberPerPacket() {return numberPerPacket; }

    public String getPricePerPacket() {return pricePerPacket; }*/

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
