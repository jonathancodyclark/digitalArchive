package service;

import model.Artifacts;
import model.Exhibits;
import repository.ExhibitsRepositoryInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.AppUsersRepositoryInterface;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Neeraj on 9/7/18.
 */
@Service
public class ExhibitService {
    @Autowired
    DataSource datasource;

    @Autowired
    ExhibitsRepositoryInterface exhibitsRepository;

    public ExhibitService() {

    }

    public Exhibits getExhibits(Integer exhibitId) {
        return exhibitsRepository.findOne(exhibitId);
    }

    public List<Exhibits> getAllExhibits() {
        return (ArrayList<Exhibits>)exhibitsRepository.findAll();
    }

    public void addExhibits(Exhibits exhibit) {
        exhibitsRepository.save(exhibit);
    }

    public void updateExhibits(Exhibits exhibit, Integer exhibitId) {
        exhibitsRepository.save(exhibit);
    }

    public void deleteExhibits(Integer exhibitId) {
        exhibitsRepository.delete(exhibitId);
    }

    public List<Artifacts> findArtifactsInExhibits(Integer exhibitId) {
        return (ArrayList<Artifacts>)exhibitsRepository.findArtifactsInExhibits(exhibitId);
    }
}
