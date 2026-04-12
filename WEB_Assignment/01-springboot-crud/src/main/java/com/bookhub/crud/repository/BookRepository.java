package com.bookhub.crud.repository;

import com.bookhub.crud.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
