import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import LogoComponent from '../subComponents/LogoComponent';
import Particles from 'react-tsparticles';
import ParticleComponent from '../subComponents/ParticleComponent';

import astrounaut from '../assets/images/spaceman.png';
import { keyframes } from 'styled-components';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 40vw;
  height: 45vh;
  margin: 0 auto;
  transform: translateY(45%);
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
  font-family: 'Karla', sans-serif;
  font-style: italic;
  backdrop-filter: blur(4px);
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />

        <Spaceman>
          <img src={astrounaut} alt="spaceman" />
        </Spaceman>
        <Main>
          안녕하세요, 프론트엔드 개발자 김길환입니다. 저는 어려서부터 컴퓨터를
          좋아했습니다.
        </Main>
      </Box>
      <BigTitle text="ABOUT" top="10%" left="5%" />
    </ThemeProvider>
  );
};

export default About;
