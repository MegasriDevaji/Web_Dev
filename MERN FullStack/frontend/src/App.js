import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const handleBookAdded = () => {
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Book Hub
        </Typography>
        <BookForm onBookAdded={handleBookAdded} />
        <BookList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
