import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const BookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
    genre: '',
    isbn: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', formData);
      setFormData({
        title: '',
        author: '',
        description: '',
        publishedYear: '',
        genre: '',
        isbn: '',
      });
      onBookAdded();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add New Book
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Published Year"
              name="publishedYear"
              type="number"
              value={formData.publishedYear}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="ISBN"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Add Book
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default BookForm;