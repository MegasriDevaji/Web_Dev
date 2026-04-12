import java.io.File;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class BookParser {

    public static void main(String[] args) {
        try {
            File xmlFile = new File("books.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(xmlFile);

            document.getDocumentElement().normalize();
            NodeList bookList = document.getElementsByTagName("book");

            System.out.println("BookHub XML Parser Output");
            System.out.println("-------------------------");

            for (int i = 0; i < bookList.getLength(); i++) {
                Node node = bookList.item(i);

                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element element = (Element) node;

                    System.out.println("Book ID   : " + element.getAttribute("id"));
                    System.out.println("Title     : " + element.getElementsByTagName("title").item(0).getTextContent());
                    System.out.println("Author    : " + element.getElementsByTagName("author").item(0).getTextContent());
                    System.out.println("Category  : " + element.getElementsByTagName("category").item(0).getTextContent());
                    System.out.println("Price     : " + element.getElementsByTagName("price").item(0).getTextContent());
                    System.out.println();
                }
            }
        } catch (Exception e) {
            System.out.println("Error while parsing XML: " + e.getMessage());
        }
    }
}
