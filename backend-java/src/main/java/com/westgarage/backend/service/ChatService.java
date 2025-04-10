package com.westgarage.backend.service;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {
    private List<String> messages = new ArrayList<>();

    public void addMessage(String message) {
        messages.add(message);
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public void clearMessages() {
        messages.clear();
    }
} 