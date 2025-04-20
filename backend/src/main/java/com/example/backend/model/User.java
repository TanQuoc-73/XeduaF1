package com.example.backend.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserID")
    private Integer userId;

    @Column(name = "UserName")
    private String userName;

    @Column(name = "PassWord")
    private String passWord;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "Role")
    private String role;

    @Column(name = "create_at")
    private Date createat;


    public User(){

    }

    public User(Integer userId, String userName, String passWord, String firstName, String lastName, String role, Date createat){
        this.userId=userId;
        this.userName=userName;
        this.passWord=passWord;
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
        this.createat=createat;
    }

    public Integer getUserId(){
        return userId;
    }
    public void setUserId(Integer userId){
        this.userId = userId;
    }
    public String getUserName(){
        return userName;
    }
    public void setUserName(String userName){
        this.userName= userName;
    }
    
    public String getPassWord(){
        return passWord;
    }
    public void setPassWord(String passWord){
        this.passWord=passWord;
    }
    public String getFirstName(){
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName=firstName;
    }
    public String getLastName(){
        return firstName;
    }
    public void setLastName(String lastName){
        this.lastName=lastName;
    }
    public String getRole(){
        return role;
    }
    public void setRole(String role){
        this.role=role;
    }
    public Date getcreate_at(){
        return createat;
    }
    public void setcreate_at(Date creatat){
        this.createat =creatat;
    }

}
