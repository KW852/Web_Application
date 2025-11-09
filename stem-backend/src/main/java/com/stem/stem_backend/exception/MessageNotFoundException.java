package com.stem.stem_backend.exception;

public class MessageNotFoundException extends RuntimeException {

    public MessageNotFoundException(Long id) {
        super("Message not found.");
    }
}