package com.westgarage.backend.service;

import com.westgarage.backend.model.User;
import com.westgarage.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Cacheable(value = "users", key = "#pageable.pageNumber + '_' + #pageable.pageSize + '_' + #name + '_' + #email + '_' + #role")
    public Page<User> findUsers(Pageable pageable, String name, String email, String role) {
        User probe = new User();
        probe.setName(name);
        probe.setEmail(email);
        probe.setRole(role);

        ExampleMatcher matcher = ExampleMatcher.matchingAll()
            .withIgnoreNullValues()
            .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING)
            .withIgnoreCase();

        Example<User> example = Example.of(probe, matcher);
        return userRepository.findAll(example, pageable);
    }

    @CacheEvict(value = "users", allEntries = true)
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
