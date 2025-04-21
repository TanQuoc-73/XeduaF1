package com.example.backend.controller;

import com.example.backend.model.Driver;
import com.example.backend.model.FastestLap;
import com.example.backend.model.Race;
import com.example.backend.model.RaceResult;
import com.example.backend.model.Schedule;
import com.example.backend.model.Team;
import com.example.backend.model.Track;
import com.example.backend.model.User;
import com.example.backend.repository.DriverRepository;
import com.example.backend.repository.FastestLapRepository;
import com.example.backend.repository.RaceRepository;
import com.example.backend.repository.RaceResultRepository;
import com.example.backend.repository.ScheduleRepository;
import com.example.backend.repository.TeamRepository;
import com.example.backend.repository.TrackRepository;
import com.example.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Cho phép Next.js truy cập
public class Maincontroller {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private TrackRepository trackRepository;

    @Autowired
    private RaceRepository raceRepository;

    @Autowired
    private RaceResultRepository raceResultRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private FastestLapRepository fastestLapRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String home() {
        return "Welcome to F1 API!";
    }

    @GetMapping("/login")
    public String log() {
        return "Xin chào API Login";
    }

    @GetMapping("/register")
    public String register() {
        return "Xin chào API Register";
    }

    @GetMapping("/teams")
    public List<Team> getAllTeams() {
        List<Team> teams = teamRepository.findAll();
        System.out.println("Teams fetched: " + teams);
        return teams;
    
    }

    @GetMapping("/drivers")
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @GetMapping("/tracks")
    public List<Track> getAllTracks() {
        return trackRepository.findAll();
    }

    @GetMapping("/races")
    public List<Race> getAllRaces() {
        return raceRepository.findAll();
    }

    @GetMapping("/race-results")
    public List<RaceResult> getAllRaceResults() {
        return raceResultRepository.findAll();
    }

    @GetMapping("/schedules")
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    @GetMapping("/fastest-laps")
    public List<FastestLap> getAllFastestLaps() {
        return fastestLapRepository.findAll();
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}