package controller;

import model.AppUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.AppUsersService;

import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 */
@RestController
@RequestMapping("/users")
public class AppUsersController {
    @Autowired
    AppUsersService aus;


    @RequestMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<AppUsers> getAllCandidates() {
        return aus.getAllAppUsers();
    }

    @RequestMapping(value = "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public AppUsers getCandidate(@PathVariable("userId") Integer userId) {
        return aus.getAppUsers(userId);
    }
}
