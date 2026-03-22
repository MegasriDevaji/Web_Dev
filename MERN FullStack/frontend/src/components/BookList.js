import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Book List
      </Typography>
      <Grid container spacing={3}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Author: {book.author}
                </Typography>
                {book.genre && (
                  <Typography variant="body2" color="textSecondary">
                    Genre: {book.genre}
                  </Typography>
                )}
                {book.publishedYear && (
                  <Typography variant="body2" color="textSecondary">
                    Published: {book.publishedYear}
                  </Typography>
                )}
                {book.description && (
                  <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
                    {book.description}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {books.length === 0 && (
        <Typography variant="body1" style={{ marginTop: '2rem', textAlign: 'center' }}>
          No books found. Add some books to get started!
        </Typography>
      )}
    </Box>
  );
};

export default BookList;