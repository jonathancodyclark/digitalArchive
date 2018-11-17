package model;

/*
this object models the JwtUser that enables us
to include fields for reproducing a user's details
from a token request or token validation
*/

public class JwtUser {

    private long userid;
    private String useremail;
    private String userrole;

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserrole() {
        return userrole;
    }

    public void setUserrole(String userrole) {
        this.userrole = userrole;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }
}
