import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';

import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import LogoComponent from '../subComponents/LogoComponent';

import { WorkData } from '../data/WorkData';
import Card from '../subComponents/Card';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Work = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />

        <Main>
          {WorkData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
