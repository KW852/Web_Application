package com.stem.stem_backend.service;

import com.stem.stem_backend.model.ContactMessage;
import com.stem.stem_backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public ContactMessage saveMessage(ContactMessage message) {
        return contactRepository.save(message);
    }

    public List<ContactMessage> getAllMessage() {
        return contactRepository.findAll();
    }
}
