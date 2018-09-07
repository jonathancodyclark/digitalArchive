package controller;

import model.Artifacts;
import model.Exhibits;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.ExhibitService;

import java.util.List;

/**
 * Created by Neeraj on 9/7/18.
 */
@RestController
@RequestMapping("/exhibits")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class ExhibitController {
    @Autowired
    ExhibitService es;


    @RequestMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Exhibits> getAllExhibits() {
        return es.getAllExhibits();
    }

    @RequestMapping(value = "/{exhibitId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Exhibits getExhibit(@PathVariable("exhibitId") Integer exhibitId) {
        return es.getExhibits(exhibitId);
    }

    @RequestMapping(method = RequestMethod.POST, value="/postExhibits")
    public void addExhibits(@RequestBody Exhibits exhibit) {
        es.addExhibits(exhibit);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/update/{exhibitId}")
    public void updateArtifacts(@RequestBody Exhibits exhibit, @PathVariable("exhibitId") Integer exhibitId) {
        es.updateExhibits(exhibit, exhibitId);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/delete/{exhibitId}")
    public void deleteExhibits(@PathVariable("exhibitId")Integer exhibitId) {
        es.deleteExhibits(exhibitId);
    }


}
