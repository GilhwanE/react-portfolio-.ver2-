import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme } from './Themes';
import HomeButton from '../subComponents/HomeButton';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  width: 30vw;
  height: 60vh;
  border: 3px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  padding: 2rem;
  z-index: 3;
  line-height: 1.5;

  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const MySkils = () => {
  return (
    <>
      <HomeButton />

      <ThemeProvider theme={lightTheme}>
        <Box>
          <Main>
            <Title>Front-end</Title>
            <p></p>
          </Main>
          <Main>
            <Title>SKills</Title>
            <p></p>
          </Main>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MySkils;
