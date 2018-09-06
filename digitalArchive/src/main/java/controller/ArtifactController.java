package controller;

import model.Artifacts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.ArtifactService;

import java.util.List;

/**
 * Created by jclark
 */
@RestController
@RequestMapping("/artifacts")
public class ArtifactController {
    @Autowired
    ArtifactService artifactService;


    @RequestMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Artifacts> getAllArtifacts() {
        return artifactService.getAllArtifacts();
    }

    @RequestMapping(value = "/{artifactid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Artifacts getArtifact(@PathVariable("artifactid") Integer artifactid) {
        return artifactService.getArtifacts(artifactid);
    }
}
