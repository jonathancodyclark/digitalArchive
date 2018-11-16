package model;

/*
This object models the credentials of a user (email and password)
that are sent from the front-end to the /token url
*/

public class JwtCredentials {
    private String useremail;
    private String userpassword;

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
}
