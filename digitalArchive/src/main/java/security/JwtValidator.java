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
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();
            jwtUser = new JwtUser();
//            jwtUser.setUserName(body.getSubject());
//            jwtUser.setId(Long.parseLong((String) body.get("userId")));
//            jwtUser.setRole((String) body.get("role"));
            jwtUser.setUserid(Long.parseLong((String) body.get("userid")));
            jwtUser.setUseremail((String) body.get("useremail"));
            jwtUser.setUserrole((String) body.get("userrole"));
        } catch (Exception e) {
            System.out.println(e);
        }

        return jwtUser;
    }
}
