package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import repository.AppUsersRepositoryInterface;
import model.AppUsers;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 * Uses repository to directly connect to database
 */
@Service
public class AppUsersService {
    @Autowired
    DataSource datasource;

    @Autowired
    AppUsersRepositoryInterface appUsersRepository;

    public AppUsersService() {

    }
    /*
    * Queries for user given primary key
    */
    public AppUsers getAppUsers(Integer userId) {
        return appUsersRepository.findOne(userId);
    }
    /*
    * Queries for all users
    */
    public List<AppUsers> getAllAppUsers() {
        return (ArrayList<AppUsers>)appUsersRepository.findAll();
    }
    /*
    * Queries to add user
    */
    public void addAppUsers(AppUsers appUsers) {
        appUsersRepository.save(appUsers);
    }
    /*
    * Queries to update user
    */
    public void updateAppUsers(AppUsers appUsers, Integer userId) {
        appUsersRepository.save(appUsers);
    }
    /*
    * Queries to delete user
    */
    public void deleteAppUsers(Integer userId) {
        appUsersRepository.delete(userId);
    }
    // not used
    public AppUsers login(String useremail, String userpassword) {
        AppUsers temp = appUsersRepository.findByEmail(useremail);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (temp != null && encoder.matches(userpassword, temp.getUserpassword())) {
            return temp;
        }
        return null;
    }
    /*
    * Queries to get user given email
    */
    public AppUsers getAppUserByEmail(String userEmail) {
        return appUsersRepository.findByEmail(userEmail);
    }


}
