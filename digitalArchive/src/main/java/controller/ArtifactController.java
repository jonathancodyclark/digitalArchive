package controller;

import model.Artifacts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.AmazonClient;
import service.ArtifactService;

import java.util.List;

/**
 * Created by jclark
 */
@RestController
@RequestMapping("/artifacts")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class ArtifactController {
    @Autowired
    ArtifactService artifactService;

    @Autowired
    AmazonClient amazonClient;


    @RequestMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Artifacts> getAllArtifacts() {
        return artifactService.getAllArtifacts();
    }

    @RequestMapping(value = "/{artifactid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Artifacts getArtifact(@PathVariable("artifactid") Integer artifactid) {
        return artifactService.getArtifacts(artifactid);
    }

    @RequestMapping(method = RequestMethod.POST, value="/postArtifacts")
    public void addArtifacts(@RequestBody Artifacts artifact) {
        artifactService.addArtifact(artifact);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/update/{artifactId}")
    public void updateArtifacts(@RequestBody Artifacts artifact, @PathVariable("artifactId") Integer artifactId) {
        artifactService.updateArtifacts(artifact, artifactId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/delete/{artifactId}")
    public void deleteAppUsers(@PathVariable("artifactId")Integer artifactId) {
        Artifacts artifact = artifactService.getArtifacts(artifactId);
        amazonClient.deleteFileFromS3Bucket(artifact.getFilepath());
        artifactService.deleteArtifacts(artifactId);
    }

    @RequestMapping(value = "/exhibits/{exhibitId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Artifacts> findArtifactsInExhibit(@PathVariable("exhibitId") Integer exhibitId) {
        return artifactService.findArtifactsInExhibits(exhibitId);
    }
}
