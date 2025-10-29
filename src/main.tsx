import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App'; // Import your App component
import theme from './theme'; // Import your custom theme

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router> {/* Wrap the entire app with Router */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
);