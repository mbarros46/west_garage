//Recebe as credenciais e retorna o token JWT
package com.westgarage.backend.controller;

import com.westgarage.backend.model.Credentials;
import com.westgarage.backend.model.Token;
import com.westgarage.backend.model.User;
import com.westgarage.backend.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public Token login(@RequestBody Credentials credentials){
        var auth = new UsernamePasswordAuthenticationToken(credentials.email(), credentials.password());
        var user = (User) authenticationManager.authenticate(auth).getPrincipal();

        return tokenService.createToken(user);
    }

}
