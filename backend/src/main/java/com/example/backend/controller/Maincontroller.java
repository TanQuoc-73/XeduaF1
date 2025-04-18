package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Team;
import com.example.backend.model.Driver;
import com.example.backend.repository.DriverRepository;
import com.example.backend.repository.TeamRepository;




@RestController
@RequestMapping("/api")
public class Maincontroller {

    @Autowired
    private TeamRepository teamRepository;
    private DriverRepository driverRepository;

    @GetMapping("/login")
    public String Log(){
        return "xin chao api Login";
    }
    @GetMapping("/register")
    public String Reg() {
        return "xin chao api register";
    }
    
    @GetMapping("/teams")
    public List<Team> getAllTeams(){
        return teamRepository.findAll();
    }
    @GetMapping("/drivers")
    public List<Driver> getAllDrivers(){
        return driverRepository.findAll();
    }
   
    
}
