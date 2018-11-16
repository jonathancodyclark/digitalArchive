package controller;

import model.JwtCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import security.JwtGenerator;
import org.springframework.http.MediaType;

import java.util.Map;

@RestController
@RequestMapping(value="/token", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class TokenController {

    @Autowired
    private JwtGenerator jwtGenerator;


    /*
    This is the mapping that users are required to get to retrieve their token from.
    They are required to send a jwtCredential object from the front-end that gets
    validated before receiving the token.
    */
    @PostMapping
    public Map<String, String> generate(@RequestBody final JwtCredentials jwtCredentials) {
        return jwtGenerator.generate(jwtCredentials);
    }
}
