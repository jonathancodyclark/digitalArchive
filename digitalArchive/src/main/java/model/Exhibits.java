package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Neeraj on 9/7/18.
 */
@Entity
public class Exhibits {
    @Id
    @Column(name="exhibit_id")
    private Integer exhibitId;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    public Exhibits() {
    }

    public Exhibits(Integer exhibitId, String name, String description) {
        this.exhibitId = exhibitId;
        this.name = name;
        this.description = description;
    }

    public Integer getExhibitId() {
        return exhibitId;
    }

    public void setExhibitId(Integer exhibitId) {
        this.exhibitId = exhibitId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
