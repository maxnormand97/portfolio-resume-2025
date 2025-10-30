import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// TODO: POC clean up later with custom styling ect
const languages = [
  { 
    name: 'JavaScript', 
    details: 'JavaScript is a versatile language used for web development, both on the client and server side.' 
  },
  { 
    name: 'Python', 
    details: 'Python is known for its simplicity and is widely used in data science, AI, and backend development.' 
  },
  { 
    name: 'Java', 
    details: 'Java is a robust, object-oriented language commonly used for enterprise applications and Android development.' 
  },
  { 
    name: 'C++', 
    details: 'C++ is a high-performance language often used in system programming, game development, and embedded systems.' 
  },
  { 
    name: 'TypeScript', 
    details: 'TypeScript is a superset of JavaScript that adds static typing, making it ideal for large-scale applications.' 
  },
  { 
    name: 'Go', 
    details: 'Go is a modern language designed for scalability and efficiency, often used in cloud and backend systems.' 
  },
  { 
    name: 'Ruby', 
    details: 'Ruby is a dynamic language known for its simplicity and is popular in web development with Ruby on Rails.' 
  },
];

export default function CodeRevealer() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (language: string) => {
    setExpanded((prev) => (prev === language ? null : language));
  };

  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Stack spacing={2}>
        {languages.map((language) => (
          <Box key={language.name}>
            <Chip
              label={language.name}
              onClick={() => handleToggle(language.name)}
              sx={{
                cursor: 'pointer',
                bgcolor: expanded === language.name ? 'primary.main' : 'grey.300',
                color: expanded === language.name ? 'white' : 'black',
                '&:hover': { bgcolor: 'primary.light', color: 'white' },
              }}
            />
            <Collapse in={expanded === language.name}>
              <Box sx={{ mt: 1, p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
                <Typography>{language.details}</Typography>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}