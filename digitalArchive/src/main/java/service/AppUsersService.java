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
 */
@Service
public class AppUsersService {
    @Autowired
    DataSource datasource;

    @Autowired
    AppUsersRepositoryInterface appUsersRepository;

    public AppUsersService() {

    }

    public AppUsers getAppUsers(Integer userId) {
        return appUsersRepository.findOne(userId);
    }

    public List<AppUsers> getAllAppUsers() {
        return (ArrayList<AppUsers>)appUsersRepository.findAll();
    }

    public void addAppUsers(AppUsers appUsers) {
        appUsersRepository.save(appUsers);
    }

    public void updateAppUsers(AppUsers appUsers, Integer userId) {
        appUsersRepository.save(appUsers);
    }

    public void deleteAppUsers(Integer userId) {
        appUsersRepository.delete(userId);
    }

    public AppUsers login(String useremail, String userpassword) {
        AppUsers temp = appUsersRepository.findByEmail(useremail);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (temp != null && encoder.matches(userpassword, temp.getUserpassword())) {
            return temp;
        }
        return null;
    }

    public AppUsers getAppUserByEmail(String userEmail) {
        return appUsersRepository.findByEmail(userEmail);
    }


}
