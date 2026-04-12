package com.bookhub.crud.controller;

import com.bookhub.crud.model.Book;
import com.bookhub.crud.repository.BookRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("books", bookRepository.findAll());
        return "index";
    }

    @GetMapping("/books/new")
    public String showCreateForm(Model model) {
        model.addAttribute("book", new Book());
        model.addAttribute("pageTitle", "Add Book");
        model.addAttribute("actionUrl", "/books");
        return "book-form";
    }

    @PostMapping("/books")
    public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("pageTitle", "Add Book");
            model.addAttribute("actionUrl", "/books");
            return "book-form";
        }
        bookRepository.save(book);
        return "redirect:/";
    }

    @GetMapping("/books/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book id: " + id));
        model.addAttribute("book", book);
        model.addAttribute("pageTitle", "Edit Book");
        model.addAttribute("actionUrl", "/books/update/" + id);
        return "book-form";
    }

    @PostMapping("/books/update/{id}")
    public String updateBook(@PathVariable Long id,
                             @Valid @ModelAttribute("book") Book book,
                             BindingResult result,
                             Model model) {
        if (result.hasErrors()) {
            model.addAttribute("pageTitle", "Edit Book");
            model.addAttribute("actionUrl", "/books/update/" + id);
            return "book-form";
        }
        book.setId(id);
        bookRepository.save(book);
        return "redirect:/";
    }

    @GetMapping("/books/delete/{id}")
    public String deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return "redirect:/";
    }
}
