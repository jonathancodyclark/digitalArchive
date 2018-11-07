package model;

public class JwtUser {
//    private String userName;
//    private long id;
//    private String role;
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public long getId() {
//        return id;
//    }
//
//    public String getUserName() {
//        return userName;
//    }

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
