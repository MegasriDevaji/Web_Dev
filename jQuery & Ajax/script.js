$(document).ready(function() {

    let books = [];

    // Load books using AJAX (GET)
    function loadBooks() {
        $.ajax({
            url: "books.json",
            method: "GET",
            dataType: "json",
            success: function(data) {
                books = data;
                displayBooks(books);
            }
        });
    }

    // Display books
    function displayBooks(bookArray) {
        $("#bookList").empty();
        $.each(bookArray, function(index, book) {
            $("#bookList").append(`
                <li class="book-item">
                    <span>${book.title} - ${book.author}</span>
                    <button class="delete" data-id="${book.id}">Delete</button>
                </li>
            `);
        });
    }

    // Add book (AJAX simulation)
    $("#addBook").click(function() {
        let title = $("#title").val();
        let author = $("#author").val();

        if(title && author) {
            let newBook = {
                id: books.length + 1,
                title: title,
                author: author
            };

            books.push(newBook);
            displayBooks(books);

            $("#title").val("");
            $("#author").val("");
        }
    });

    // Delete book
    $(document).on("click", ".delete", function() {
        let id = $(this).data("id");
        books = books.filter(book => book.id != id);
        displayBooks(books);
    });

    // Search books
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        let filtered = books.filter(book =>
            book.title.toLowerCase().includes(value) ||
            book.author.toLowerCase().includes(value)
        );
        displayBooks(filtered);
    });

    loadBooks();
});