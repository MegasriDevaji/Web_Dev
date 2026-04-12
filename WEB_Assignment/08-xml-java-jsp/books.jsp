<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="com.bookhub.model.Book" %>
<%
    List<Book> books = (List<Book>) request.getAttribute("books");
    String error = (String) request.getAttribute("error");
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BookHub JSP Assignment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f8f4ed;
            margin: 0;
            padding: 30px;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 14px;
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        h1 {
            color: #71411d;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #f3e4d1;
        }
        .error {
            color: #b91c1c;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>BookHub Book List</h1>
    <p>This JSP page displays book details loaded from an XML file using Java servlet code.</p>

    <% if (error != null) { %>
        <p class="error"><%= error %></p>
    <% } %>

    <table>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
        <% if (books != null) {
            for (Book book : books) { %>
        <tr>
            <td><%= book.getId() %></td>
            <td><%= book.getTitle() %></td>
            <td><%= book.getAuthor() %></td>
            <td><%= book.getCategory() %></td>
            <td><%= book.getPrice() %></td>
        </tr>
        <%  }
        } %>
    </table>
</div>
</body>
</html>
