// Gera e valida o token JWT usando Auth0 (java-jwt)
package com.westgarage.backend.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import com.westgarage.backend.model.Token;
import com.westgarage.backend.model.User;

@Service
public class TokenService {

    private Instant expiresAt = LocalDateTime.now().plusDays(1).toInstant(ZoneOffset.ofHours(-3));
    private Algorithm algorithm = Algorithm.HMAC256("secret");

    public Token createToken(User user){
        String jwt = JWT.create()
            .withSubject(user.getId().toString())
            .withClaim("email", user.getEmail())
            .withExpiresAt(expiresAt)
            .sign(algorithm);

        return new Token(jwt, user.getEmail());
    }

    public User getUserFromToken(String token){
        DecodedJWT verifiedToken = JWT.require(algorithm).build().verify(token);

        return User.builder()
                .id(Long.valueOf( verifiedToken.getSubject() ))
                .email(verifiedToken.getClaim("email").asString())
                .build();
    }

}
