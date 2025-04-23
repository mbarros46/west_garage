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

    Page<User> findByNameContainingIgnoreCase(String name, Pageable pageable);
    Page<User> findByEmailContainingIgnoreCase(String email, Pageable pageable);
    Page<User> findByRole(String role, Pageable pageable);
    Page<User> findByNameContainingIgnoreCaseAndRole(String name, String role, Pageable pageable);
    Page<User> findByEmailContainingIgnoreCaseAndRole(String email, String role, Pageable pageable);
} 