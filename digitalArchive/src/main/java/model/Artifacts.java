package model;

import javax.persistence.*;

/**
 * Created by jclark
 * Models Artifacts Table and has getters and setters for each column in table
 */
@Entity
public class Artifacts {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "ARTIFACTS_SEQ")
    @SequenceGenerator(name = "ARTIFACTS_SEQ",
            sequenceName = "ARTIFACTS_SEQ", allocationSize = 1)
    @Column(name="artifactid")
    private Integer artifactid;

    @Column(name = "name")
    private String name;

    @Column(name = "exhibit_id")
    private Integer exhibitId;

    @Column(name="description")
    private String description;

    @Column(name="on_display")
    private int onDisplay;

    @Column (name = "filepath")
    private String filepath;

    public Artifacts() {}


    public Artifacts(Integer artifactid, String name, Integer exhibitId, String description, int onDisplay, String filepath) {
        this.artifactid = artifactid;
        this.name = name;
        if (exhibitId == null)
        {
            exhibitId = 0;
        }
        this.exhibitId = exhibitId;
        this.description = description;
        this.onDisplay = onDisplay;
        this.filepath = filepath;
    }

    public Integer getArtifactid() {
        return artifactid;
    }

    public void setArtifactid(Integer artifactid) {
        this.artifactid = artifactid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getExhibitId() {
        return exhibitId;
    }

    public void setExhibitId(Integer exhibitId) {
        if (exhibitId == null)
        {
            exhibitId = 0;
        }
        this.exhibitId = exhibitId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getOnDisplay() {
        return onDisplay;
    }

    public void setOnDisplay(int onDisplay) {
        this.onDisplay = onDisplay;
    }

    public String getFilepath() {
        return filepath;
    }

    public void setFilepath(String filepath) {
        this.filepath = filepath;
    }
}
