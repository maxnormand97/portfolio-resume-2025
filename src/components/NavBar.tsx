import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';

interface NavBarProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const NavBar: React.FC<NavBarProps> = ({ value, onChange }) => {
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
        onChange={onChange}
      >
        <BottomNavigationAction label="About" value="about" icon={<PersonIcon />} />
        <BottomNavigationAction label="Projects" value="projects" icon={<CodeIcon />} />
        <BottomNavigationAction label="Contact" value="contact" icon={<MailIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;