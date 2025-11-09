package com.stem.stem_backend.repository;

import com.stem.stem_backend.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
}

//save(ContactMessage message)
//findAll()
//findById(Long id)
//deleteById(Long id)
