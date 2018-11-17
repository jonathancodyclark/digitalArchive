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
 * Uses repository to directly connect to database
 */
@Service
public class ExhibitService {
    @Autowired
    DataSource datasource;

    @Autowired
    ExhibitsRepositoryInterface exhibitsRepository;

    public ExhibitService() {

    }
    /*
    * Queries for exhibit given primary key
    */
    public Exhibits getExhibits(Integer exhibitId) {
        return exhibitsRepository.findOne(exhibitId);
    }
    /*
    * Queries for all exhibits
    */
    public List<Exhibits> getAllExhibits() {
        return (ArrayList<Exhibits>)exhibitsRepository.findAll();
    }
    /*
    * Queries to add exhibit
    */
    public void addExhibits(Exhibits exhibit) {
        exhibitsRepository.save(exhibit);
    }
    /*
    * Queries to update exhibit
    */
    public void updateExhibits(Exhibits exhibit, Integer exhibitId) {
        exhibitsRepository.save(exhibit);
    }
    /*
    * Queries to delete exhibit
    */
    public void deleteExhibits(Integer exhibitId) {
        exhibitsRepository.delete(exhibitId);
    }


}
