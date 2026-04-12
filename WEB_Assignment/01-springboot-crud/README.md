# Spring Boot CRUD

BookHub-themed CRUD assignment using Spring Boot, Thymeleaf, Spring Data JPA, and H2.

## Features

- Add book
- View all books
- Edit book
- Delete book
- In-memory H2 database

## Tech used

- Java 17
- Spring Boot
- Thymeleaf
- Spring Data JPA
- H2 Database

## Run

Open terminal in this folder and run:

```bash
mvn spring-boot:run
```

Then open:

- `http://localhost:8080/`
- H2 console: `http://localhost:8080/h2-console`

## H2 settings

- JDBC URL: `jdbc:h2:mem:bookhubdb`
- Username: `sa`
- Password: leave empty
