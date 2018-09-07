package repository;

import model.Exhibits;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Neeraj on 9/7/18.
 */
public interface ExhibitsRepositoryInterface extends CrudRepository<Exhibits, Integer> {
}
