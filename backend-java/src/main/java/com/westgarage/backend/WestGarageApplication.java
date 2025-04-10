package com.westgarage.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class WestGarageApplication {

    public static void main(String[] args) {
        SpringApplication.run(WestGarageApplication.class, args);
    }
} 