package controller;

import model.JwtCredentials;
import model.JwtUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import security.JwtGenerator;

@RestController
@RequestMapping("/token")
public class TokenController {

    @Autowired
    private JwtGenerator jwtGenerator;

    @PostMapping
    public String generate(@RequestBody final JwtCredentials jwtCredentials) {
        return jwtGenerator.generate(jwtCredentials);
    }
}
