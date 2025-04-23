package com.westgarage.backend.repository;

import com.westgarage.backend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);

    Page<User> findByUsernameContainingIgnoreCase(String username, Pageable pageable);
    Page<User> findByRole(String role, Pageable pageable);
    Page<User> findByUsernameContainingIgnoreCaseAndRole(String username, String role, Pageable pageable);
} 