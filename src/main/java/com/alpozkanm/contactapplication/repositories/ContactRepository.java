package com.alpozkanm.contactapplication.repositories;

import com.alpozkanm.contactapplication.models.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> {
    @Override
    void delete(Contact deleted);
}
