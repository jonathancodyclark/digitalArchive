package security;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import model.AppUsers;
import model.JwtCredentials;
import model.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import service.AppUsersService;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtGenerator {

    @Autowired
    AppUsersService appUsersService;

    /*
    This generates our token based on the jwtCredentials that we send to the '/token' mapping.
    Before sending any token we do verify their identity and correct credentials
    */
    public Map<String, String> generate(JwtCredentials jwtCredentials) {
        //verify correct password here with appUsersService
        AppUsers temp = appUsersService.getAppUserByEmail(jwtCredentials.getUseremail());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (temp != null && encoder.matches(jwtCredentials.getUserpassword(), temp.getUserpassword())) {

            Claims claims = Jwts.claims();
            claims.put("userid", String.valueOf(temp.getUserId()));
            claims.put("useremail", jwtCredentials.getUseremail());
            claims.put("userrole", temp.getUserrole());
            Map<String, String> map = new HashMap<String, String>();
            Date fifteenMinutes = new Date(System.currentTimeMillis() + 1800000); //current date plus milliseconds
            map.put("Token", Jwts.builder()
                    .setClaims(claims)
                    .signWith(SignatureAlgorithm.HS512, "africa")
                    .setExpiration(fifteenMinutes)
                    .compact());
            map.put("Role", temp.getUserrole());
            return map;
        } else {
            throw new RuntimeException("Invalid JWT Credentials");
        }
    }
}
