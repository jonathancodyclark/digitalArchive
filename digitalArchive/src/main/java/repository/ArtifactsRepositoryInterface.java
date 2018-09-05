package repository;

import model.Artifacts;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by jclark
 */
public interface ArtifactsRepositoryInterface extends CrudRepository<Artifacts, Integer> {

}
