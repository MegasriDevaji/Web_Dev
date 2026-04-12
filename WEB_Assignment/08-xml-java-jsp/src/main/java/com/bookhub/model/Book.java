package com.bookhub.model;

public class Book {

    private final String id;
    private final String title;
    private final String author;
    private final String category;
    private final String price;

    public Book(String id, String title, String author, String category, String price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getCategory() {
        return category;
    }

    public String getPrice() {
        return price;
    }
}
