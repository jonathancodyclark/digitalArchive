package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jclark
 */
@Entity
public class Artifacts {
    @Id
    @Column(name="artifactid")
    private Integer artifactid;

    @Column(name = "name")
    private String name;

    @Column(name = "exhibit")
    private String exhibit;

    @Column(name="origin_city")
    private String origin_city;

    @Column(name= "origin_country")
    private String origin_country;

    @Column(name="origin_state")
    private String origin_state;

    @Column(name="on_display")
    private String on_display;

    @Column(name="year_start")
    private String year_start;

    @Column(name="year_end")
    private String year_end;



    @Column(name="description")
    private String description;

    public Artifacts(Integer artifactid, String name, String exhibit, String origin_city, String origin_country, String origin_state, String on_display, String year_start, String year_end, String description) {
        this.artifactid = artifactid;
        this.name = name;
        this.exhibit = exhibit;
        this.origin_city = origin_city;
        this.origin_country = origin_country;
        this.origin_state = origin_state;
        this.on_display = on_display;
        this.year_start = year_start;
        this.year_end = year_end;
        this.description = description;
    }

    public Integer getArtifactid() {
        return artifactid;
    }

    public String getName() {
        return name;
    }

    public String getExhibit() {
        return exhibit;
    }

    public String getOrigin_city() {
        return origin_city;
    }

    public String getOrigin_country() {
        return origin_country;
    }

    public String getOrigin_state() {
        return origin_state;
    }

    public String getOn_display() {
        return on_display;
    }

    public String getYear_start() {
        return year_start;
    }

    public String getYear_end() {
        return year_end;
    }

    public String getDescription() {
        return description;
    }

    public void setArtifactid(Integer artifactid) {
        this.artifactid = artifactid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setExhibit(String exhibit) {
        this.exhibit = exhibit;
    }

    public void setOrigin_city(String origin_city) {
        this.origin_city = origin_city;
    }

    public void setOrigin_country(String origin_country) {
        this.origin_country = origin_country;
    }

    public void setOrigin_state(String origin_state) {
        this.origin_state = origin_state;
    }

    public void setOn_display(String on_display) {
        this.on_display = on_display;
    }

    public void setYear_start(String year_start) {
        this.year_start = year_start;
    }

    public void setYear_end(String year_end) {
        this.year_end = year_end;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
