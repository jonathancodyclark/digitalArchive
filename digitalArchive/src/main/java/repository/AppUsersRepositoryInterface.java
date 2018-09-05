package repository;

import model.AppUsers;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Neeraj on 9/2/18.
 */
public interface AppUsersRepositoryInterface extends CrudRepository<AppUsers, Integer> {
}
