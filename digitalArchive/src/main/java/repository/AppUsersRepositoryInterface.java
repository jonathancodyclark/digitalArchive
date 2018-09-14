package repository;

import model.AppUsers;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 */
public interface AppUsersRepositoryInterface extends CrudRepository<AppUsers, Integer> {
    @Query(value="Select user_id, username, userpassword, firstname, lastname, userrole, useremail from app_users where username =?1", nativeQuery = true)
    AppUsers findByUsername(String username);
}
