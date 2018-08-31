package com.database.adapter.dbadapter.controllers;

import com.database.adapter.dbadapter.domain.Users;
import com.database.adapter.dbadapter.repositories.UsersRepository;
import com.database.adapter.dbadapter.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping(value="/rest/user")
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping(value="/all")
    public ArrayList<Users> getAll() {
        return usersService.getAllUsers();
    }

    @PostMapping(value="/newuser")
    public void addUser(@RequestBody Users user) {
        System.out.println("***************WE MADE IT TO THE NEWUSER MAPPING");
        usersService.saveUser(user);
    }
}
