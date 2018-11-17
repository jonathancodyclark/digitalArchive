package repository;

import model.Artifacts;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by jclark
 * Talks directly to database table Artifacts, comes with basic functions like add and delete and get
 */
public interface ArtifactsRepositoryInterface extends CrudRepository<Artifacts, Integer> {
    @Query(value="Select artifactid, name, exhibit_id, description, on_display, filepath from Artifacts where exhibit_id =?1", nativeQuery = true)
    List<Artifacts> findArtifactsInExhibits(Integer exhibitId);
}
