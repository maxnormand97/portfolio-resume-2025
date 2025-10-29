import React from 'react';
import PageWrapper from '../components/PageWrapper';
import NavBar from '../components/NavBar';

const About: React.FC = () => {
  const [navValue, setNavValue] = React.useState(0);

  const handleNavChange = (event: React.SyntheticEvent, newValue: number) => {
    setNavValue(newValue);
  };

  return (
    <>
      <PageWrapper>
        <h1>About Me</h1>
        <p>
          Welcome to the About page! Here you can learn more about me and my work.
        </p>
        {/* Basic About me */}
        {/* Experience */}
        {/* Skills */}
        {/* Certs */}
        {/* Something fun / interactive! */}
        {/* Theme changer - press a button pretty things happen (not just light / dark that boring) */}
      </PageWrapper>
      <NavBar value={navValue} onChange={handleNavChange} />
    </>
  );
};

export default About;