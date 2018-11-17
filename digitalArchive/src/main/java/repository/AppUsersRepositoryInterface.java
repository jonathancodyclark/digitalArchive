package repository;

import model.AppUsers;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 * Talks directly to database for table AppUsers, comes with basic functions like add and delete and get
 */
public interface AppUsersRepositoryInterface extends CrudRepository<AppUsers, Integer> {
    @Query(value="Select user_id, userpassword, firstname, lastname, userrole, useremail, newuser from app_users where useremail =?1", nativeQuery = true)
    AppUsers findByEmail(String email);

}
