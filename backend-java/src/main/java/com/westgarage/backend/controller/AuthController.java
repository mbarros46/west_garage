package com.westgarage.backend.controller;

import com.westgarage.backend.model.dto.ApiResponse;
import com.westgarage.backend.model.dto.LoginRequest;
import com.westgarage.backend.model.dto.RegisterRequest;
import com.westgarage.backend.model.dto.UserDTO;
import com.westgarage.backend.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Tag(name = "Autenticação", description = "Endpoints de autenticação e gerenciamento de usuários")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @Operation(summary = "Registra um novo usuário")
    public ResponseEntity<ApiResponse<UserDTO>> register(@Valid @RequestBody RegisterRequest request) {
        try {
            UserDTO user = authService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success("Cadastro realizado com sucesso!", user));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    @PostMapping("/login")
    @Operation(summary = "Realiza o login do usuário")
    public ResponseEntity<ApiResponse<Map<String, String>>> login(@Valid @RequestBody LoginRequest request) {
        try {
            String token = authService.login(request);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(ApiResponse.success("Login bem-sucedido", response));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(ApiResponse.error("E-mail ou senha incorretos"));
        }
    }

    @GetMapping("/users")
    @Operation(summary = "Retorna a lista de usuários (utilizando cache)")
    public ResponseEntity<ApiResponse<List<UserDTO>>> getAllUsers() {
        List<UserDTO> users = authService.getAllUsers();
        return ResponseEntity.ok(ApiResponse.success("Lista de usuários", users));
    }

    @GetMapping("/test")
    @Operation(summary = "Rota de teste para verificar se as rotas de autenticação estão funcionando")
    public ResponseEntity<ApiResponse<String>> test() {
        return ResponseEntity.ok(ApiResponse.success("Rotas de autenticação funcionando corretamente!"));
    }
} 