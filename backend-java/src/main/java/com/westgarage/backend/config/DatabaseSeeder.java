package com.westgarage.backend.config;

import com.westgarage.backend.model.User;
import com.westgarage.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DatabaseSeeder {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        return args -> {
            // Limpa o banco de dados
            userRepository.deleteAll();

            // Cria usuário admin
            User admin = new User();
            admin.setName("Administrador");
            admin.setEmail("admin@example.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRole("ROLE_ADMIN");
            userRepository.save(admin);

            // Cria usuário comum
            User user = new User();
            user.setName("Usuário");
            user.setEmail("user@example.com");
            user.setPassword(passwordEncoder.encode("user123"));
            user.setRole("ROLE_USER");
            userRepository.save(user);
        };
    }
}
