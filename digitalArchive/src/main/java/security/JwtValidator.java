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

    private String secret = "youtube";

    public JwtUser validate(String token) {
        JwtUser jwtUser = null;
        Claims body = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
        System.out.println(System.currentTimeMillis() + "***************");
        System.out.println(body.getExpiration().getTime() + "*****************");
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
