# XML + Java + JSP

This assignment is now arranged as a standard Maven web application for Tomcat.

## Main structure

- `src/main/java/com/bookhub/model/Book.java`
- `src/main/java/com/bookhub/servlet/BookServlet.java`
- `src/main/webapp/books.jsp`
- `src/main/webapp/books.xml`
- `src/main/webapp/WEB-INF/web.xml`
- `pom.xml`

## Requirement

- Java
- Maven
- Apache Tomcat 9

## Build

Open terminal in this folder and run:

```bash
mvn package
```

This creates:

```bash
target/xml-java-jsp.war
```

## Deploy in Tomcat

Copy `target/xml-java-jsp.war` into Tomcat `webapps` folder, then start Tomcat.

Open:

```bash
http://localhost:8080/xml-java-jsp/books
```

## Flow

1. Servlet reads `books.xml`
2. Servlet converts XML nodes into Java objects
3. JSP displays the book list in a table
