package controller;

import model.AppUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.AppUsersService;

import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 * Controller which allows us to communicate with service and create JSON Objects
 */
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class AppUsersController {
    @Autowired
    AppUsersService aus;

    /*
    * Get all users from AppUser table
    */
    @RequestMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<AppUsers> getAllAppUsers() {
        return aus.getAllAppUsers();
    }

    /*
    * Get all user from AppUser table with userId
    */
    @RequestMapping(value = "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public AppUsers getAppUsers(@PathVariable("userId") Integer userId) {
        return aus.getAppUsers(userId);
    }
    /*
    * Create user to AppUser table
    */
    @RequestMapping(method = RequestMethod.POST, value="/postAppUsers")
    public void addAppUsers(@RequestBody AppUsers appUsers) {
        aus.addAppUsers(appUsers);
    }
    /*
    * Update user to AppUser table
    */
    @RequestMapping(method = RequestMethod.PUT, value="/update/{userId}")
    public void updateAppUsers(@RequestBody AppUsers appUsers, @PathVariable("userId") Integer userId) {
        aus.updateAppUsers(appUsers, userId);
    }
    /*
    * Delete user to AppUser table
    */
    @RequestMapping(method = RequestMethod.DELETE, value="/delete/{userId}")
    public void deleteAppUsers(@PathVariable("userId")Integer userId) {
        aus.deleteAppUsers(userId);
    }

//    @RequestMapping(value = "/login/{useremail}/{userpassword}", produces = MediaType.APPLICATION_JSON_VALUE)
//    public AppUsers login(@PathVariable("useremail") String useremail, @PathVariable("userpassword") String userpassword) {
//        return aus.login(useremail,userpassword);
//    }
    /*
    * Get all user from AppUser table with email
    */
    @RequestMapping(value = "/getByEmail/{useremail}", produces = MediaType.APPLICATION_JSON_VALUE)
    public AppUsers getAppUsersByEmail(@PathVariable("useremail") String useremail) {
    return aus.getAppUserByEmail(useremail);
}

}
