package com.stem.stem_backend.controller;

import com.stem.stem_backend.exception.MessageNotFoundException;
import com.stem.stem_backend.model.ContactMessage;
import com.stem.stem_backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stem/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    public ContactMessage createMessage(@RequestBody ContactMessage message) {
        return contactService.saveMessage(message);
    }

    @GetMapping
    public List<ContactMessage> getAllMessage() {
        return contactService.getAllMessage();
    }

    @GetMapping("/{id}")
    public ContactMessage getMessageById(@PathVariable Long id) {
        return contactService.getAllMessage().stream()
                .filter(m -> m.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new MessageNotFoundException(id));
    }



}
