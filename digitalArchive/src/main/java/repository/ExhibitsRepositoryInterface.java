package repository;

import model.Artifacts;
import model.Exhibits;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Neeraj on 9/7/18.
 */
public interface ExhibitsRepositoryInterface extends CrudRepository<Exhibits, Integer> {

}
