// Filtro que intercepta requisições e valida o JWT
package com.westgarage.backend.model;

public record Credentials(
    String email,
    String password
) {}
