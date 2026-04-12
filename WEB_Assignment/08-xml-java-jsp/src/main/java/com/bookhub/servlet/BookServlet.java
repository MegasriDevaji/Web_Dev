package com.bookhub.servlet;

import com.bookhub.model.Book;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

@WebServlet("/books")
public class BookServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<Book> books = new ArrayList<>();

        try {
            String xmlPath = getServletContext().getRealPath("/books.xml");
            File xmlFile = new File(xmlPath);

            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(xmlFile);
            document.getDocumentElement().normalize();

            NodeList bookList = document.getElementsByTagName("book");
            for (int i = 0; i < bookList.getLength(); i++) {
                Node node = bookList.item(i);
                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element element = (Element) node;
                    books.add(new Book(
                            element.getAttribute("id"),
                            element.getElementsByTagName("title").item(0).getTextContent(),
                            element.getElementsByTagName("author").item(0).getTextContent(),
                            element.getElementsByTagName("category").item(0).getTextContent(),
                            element.getElementsByTagName("price").item(0).getTextContent()
                    ));
                }
            }
        } catch (Exception e) {
            request.setAttribute("error", "Unable to load XML data: " + e.getMessage());
        }

        request.setAttribute("books", books);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/books.jsp");
        dispatcher.forward(request, response);
    }
}
