package repository;

import model.AppUsers;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Neeraj on 9/2/18.
 */
public interface AppUsersRepositoryInterface extends CrudRepository<AppUsers, Integer> {

}
