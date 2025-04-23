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

    @Cacheable(value = "users", key = "#pageable.pageNumber + '_' + #pageable.pageSize + '_' + #username + '_' + #role")
    public Page<User> findUsers(Pageable pageable, String username, String role) {
        if (username != null && role != null) {
            return userRepository.findByUsernameContainingIgnoreCaseAndRole(username, role, pageable);
        } else if (username != null) {
            return userRepository.findByUsernameContainingIgnoreCase(username, pageable);
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