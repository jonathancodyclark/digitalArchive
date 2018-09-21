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

    @Column(name = "exhibit_id")
    private Integer exhibitId;

    @Column(name="description")
    private String description;

    @Column(name="on_display")
    private int onDisplay;

    public Artifacts() {}


    public Artifacts(Integer artifactid, String name, Integer exhibitId, String description, int onDisplay) {
        this.artifactid = artifactid;
        this.name = name;
        if (exhibitId == null)
        {
            exhibitId = 0;
        }
        this.exhibitId = exhibitId;
        this.description = description;
        this.onDisplay = onDisplay;
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
}
