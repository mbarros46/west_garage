package com.westgarage.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        
        // Permitir todas as origens em desenvolvimento
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedOrigin("http://localhost:4200"); // Para Angular
        
        // Permitir todos os headers
        config.addAllowedHeader("*");
        
        // Permitir todos os métodos HTTP
        config.addAllowedMethod("*");
        
        // Permitir credenciais
        config.setAllowCredentials(true);
        
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
} 