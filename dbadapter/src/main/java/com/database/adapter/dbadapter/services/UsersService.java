package com.database.adapter.dbadapter.services;

import com.database.adapter.dbadapter.domain.Users;
import com.database.adapter.dbadapter.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public void saveUser(Users newUser) {
        usersRepository.save(newUser);
    }

    public ArrayList<Users> getAllUsers() {
        return (ArrayList<Users>) usersRepository.findAll();
    }
}
