// Representa o corpo da requisição de logi
package com.westgarage.backend.model;

public record Token(
    String token,
    String email
) {}
