import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';

const App: React.FC = () => {
  // Is this even doing anything
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <BottomNavigation
        sx={{
          width: 500,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
        value={value}
        onChange={handleChange}
      >
        {/* TODO: link / route to about me */}
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<PersonIcon />}
        />
        {/* TODO: projects */}
        <BottomNavigationAction
          label="Projects"
          value="projects"
          icon={<CodeIcon />}
        />
        {/* TODO: contact */}
        <BottomNavigationAction
          label="Contact"
          value="contact"
          icon={<MailIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default App;