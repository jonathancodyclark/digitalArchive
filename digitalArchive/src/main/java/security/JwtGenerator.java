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

@Component
public class JwtGenerator {

    @Autowired
    AppUsersService appUsersService;

    public String generate(JwtCredentials jwtCredentials) {
        //verify correct password here with appUsersService
        AppUsers temp = appUsersService.getAppUserByEmail(jwtCredentials.getUseremail());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (temp != null && encoder.matches(jwtCredentials.getUserpassword(), temp.getUserpassword())) {

            Claims claims = Jwts.claims();
            claims.put("userid", String.valueOf(temp.getUserId()));
            claims.put("useremail", jwtCredentials.getUseremail());
            claims.put("userrole", temp.getUserrole());


            return Jwts.builder()
                    .setClaims(claims)
                    .signWith(SignatureAlgorithm.HS512, "youtube")
                    .compact();
        } else {
            throw new RuntimeException("Invalid JWT Credentials");
        }

//        Claims claims = Jwts.claims()
//                .setSubject(jwtUser.getUserName());
//
//        claims.put("user", String.valueOf(jwtUser.getId()));
//        claims.put("role", jwtUser.getRole());


//        Claims claims = Jwts.claims();
//        claims.put("useremail", jwtCredentials.getUseremail());
//        claims.put("userpassword", jwtCredentials.getUserpassword());
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .signWith(SignatureAlgorithm.HS512, "youtube")
//                .compact();

    }
}
