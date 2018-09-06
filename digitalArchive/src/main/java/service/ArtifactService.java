package service;

import model.Artifacts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.ArtifactsRepositoryInterface;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

/**
 * Created by jclark
 */
@Service
public class ArtifactService {
    @Autowired
    DataSource datasource;

    @Autowired
    ArtifactsRepositoryInterface artifactRepository;

    public ArtifactService() {

    }

    public Artifacts getArtifacts(Integer artifactid) {
        return artifactRepository.findOne(artifactid);
    }

    public List<Artifacts> getAllArtifacts() {
        return (ArrayList<Artifacts>)artifactRepository.findAll();
    }
}
