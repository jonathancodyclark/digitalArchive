package controller;

import model.JwtCredentials;
import model.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import security.JwtGenerator;
import org.springframework.http.MediaType;

import java.awt.*;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value="/token", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class TokenController {

    @Autowired
    private JwtGenerator jwtGenerator;

    @PostMapping
    public Map<String, String> generate(@RequestBody final JwtCredentials jwtCredentials) {
        return jwtGenerator.generate(jwtCredentials);
        //return Collections.singletonMap("Token", jwtGenerator.generate(jwtCredentials));
    }
}
