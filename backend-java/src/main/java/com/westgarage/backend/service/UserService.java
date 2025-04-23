package com.westgarage.backend.service;

import com.westgarage.backend.model.User;
import com.westgarage.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Cacheable(value = "users", key = "#pageable.pageNumber + '_' + #pageable.pageSize + '_' + #name + '_' + #email + '_' + #role")
    public Page<User> findUsers(Pageable pageable, String name, String email, String role) {
        if (name != null && role != null) {
            return userRepository.findByNameContainingIgnoreCaseAndRole(name, role, pageable);
        } else if (email != null && role != null) {
            return userRepository.findByEmailContainingIgnoreCaseAndRole(email, role, pageable);
        } else if (name != null) {
            return userRepository.findByNameContainingIgnoreCase(name, pageable);
        } else if (email != null) {
            return userRepository.findByEmailContainingIgnoreCase(email, pageable);
        } else if (role != null) {
            return userRepository.findByRole(role, pageable);
        }
        return userRepository.findAll(pageable);
    }

    @CacheEvict(value = "users", allEntries = true)
    public User saveUser(User user) {
        return userRepository.save(user);
    }
} 