package com.westgarage.backend.controller;

import com.westgarage.backend.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping("/messages")
    public ResponseEntity<List<String>> getMessages() {
        return ResponseEntity.ok(chatService.getMessages());
    }

    @DeleteMapping("/messages")
    public ResponseEntity<Void> clearMessages() {
        chatService.clearMessages();
        return ResponseEntity.ok().build();
    }
} 