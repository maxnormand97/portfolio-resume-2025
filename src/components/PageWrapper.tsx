import React from 'react';
import { Box, Container, Paper } from '@mui/material';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: 2,
            backgroundColor: 'background.paper',
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default PageWrapper;