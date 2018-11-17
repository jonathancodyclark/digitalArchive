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
 * Uses repository to directly connect to database
 */
@Service
public class ArtifactService {
    @Autowired
    DataSource datasource;

    @Autowired
    ArtifactsRepositoryInterface artifactRepository;

    public ArtifactService() {

    }
    /*
    * Queries for artifact given primary key
    */
    public Artifacts getArtifacts(Integer artifactid) {
        return artifactRepository.findOne(artifactid);
    }
    /*
    * Queries for all artifacts
    */
    public List<Artifacts> getAllArtifacts() {
        return (ArrayList<Artifacts>)artifactRepository.findAll();
    }
    /*
    * Queries to add artifact
    */
    public void addArtifact(Artifacts artifact) {
        artifactRepository.save(artifact);
    }
    /*
    * Queries to update artifact
    */
    public void updateArtifacts(Artifacts artifact, Integer artifactId) {
        artifactRepository.save(artifact);
    }
    /*
    * Queries to delete artifacts
    */
    public void deleteArtifacts(Integer artifactId) {
        artifactRepository.delete(artifactId);
    }
    /*
    * Queries to find artifacts which have exhibitId equal same exhibitId
    */
    public List<Artifacts> findArtifactsInExhibits(Integer exhibitId) {
        return (ArrayList<Artifacts>)artifactRepository.findArtifactsInExhibits(exhibitId);
    }
}
