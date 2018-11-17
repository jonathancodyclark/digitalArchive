package model;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;

/**
 * Created by Neeraj on 8/31/18.
 * Models AppUsers Table and has getters and setters for each column in table
 */
@Entity
public class AppUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "APP_USERS_SEQ")
    @SequenceGenerator(name = "APP_USERS_SEQ",
            sequenceName = "APP_USERS_SEQ", allocationSize = 1)
    @Column(name="user_id")
    private Integer userId;

    @Column(name = "userpassword")
    private String userpassword;

    @Column(name="firstname")
    private String firstname;

    @Column(name= "lastname")
    private String lastname;

    @Column(name="userrole")
    private String userrole;

    @Column(name = "useremail")
    private String useremail;

    @Column(name = "newuser")
    private Integer newuser;

    public AppUsers() {
    }

    public AppUsers(Integer userId, String userpassword, String firstname, String lastname, String userrole, String useremail, Integer newuser) {
        this.userId = userId;
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        this.userpassword = encoder.encode(userpassword);
        //this.userpassword = userpassword;
        this.firstname = firstname;
        this.lastname = lastname;
        this.userrole = userrole;
        this.useremail = useremail;
        this.newuser = newuser;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        this.userpassword = encoder.encode(userpassword);
        //this.userpassword = userpassword;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUserrole() {
        return userrole;
    }

    public void setUserrole(String userrole) {
        this.userrole = userrole;
    }


    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public Integer getNewuser() {
        return newuser;
    }

    public void setNewuser(Integer newuser) {
        this.newuser = newuser;
    }
}
