package security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import model.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import repository.AppUsersRepositoryInterface;

@Component
public class JwtValidator {

    @Autowired
    AppUsersRepositoryInterface appUsersRepository;

    private String secret = "africa";


    /*
    This method validates that this token was
    generated correctly and corresponds to a
    correct jwtUser identity when it is recreated
    from the token
    */
    public JwtUser validate(String token) {
        JwtUser jwtUser = null;
        Claims body = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
        if (System.currentTimeMillis() < body.getExpiration().getTime()) {
            jwtUser = new JwtUser();
            jwtUser.setUserid(Long.parseLong((String) body.get("userid")));
            jwtUser.setUseremail((String) body.get("useremail"));
            jwtUser.setUserrole((String) body.get("userrole"));
        } else {
            throw new RuntimeException("JWT Token has expired");
        }
        return jwtUser;
    }
}
