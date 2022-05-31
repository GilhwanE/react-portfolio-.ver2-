import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import LogoComponent from '../subComponents/LogoComponent';

import astrounaut from '../assets/images/spaceman.png';
import { keyframes } from 'styled-components';
import BigTitle from '../subComponents/BigTitle';
import ParticleComponent2 from '../subComponents/ParticleComponent2';

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
  width: 50vw;
  height: 60vh;
  margin: 0 auto;
  position: absolute;
  left: calc(5rem + 10vw);
  top: 10rem;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.4rem + 1vw);
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
        <ParticleComponent2 />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        <Spaceman>
          <img src={astrounaut} alt="spaceman" />
        </Spaceman>
        <Main>
          🚀 안녕하세요, 프론트엔드 개발자 김길환입니다.
          <br />
          <br /> 코딩하는 순간 바로 시각적으로 표현되는 사이트들을 보면서 흥미를
          느끼고 프론트엔드 개발자가 되자는 목표가 생겼습니다.
          <br />
          <br />
          프론트 개발자가 되기 위해서 HTML, CSS, JavaScript와 관련된 강의들을
          보면서 기초를 다치고 웹사이트를 만들어왔습니다. 화면구성은 어떻게
          할지?, 사용자들이 사용하면서 어떠한점이 불편할까?
          <br />
          <br /> UI/UX적관점에서 고민들을 하면서 어떻게 하면 사용자들에게
          만족감을 줄 수 있는지 고민들을 많이 했습니다. 그런 고민들이 재미있게
          다가왔을때 보다 더욱 사용자들 위한 일들을 수행해야겠다는 다짐을 가지며
          프론트 개발자가 되기 위해서 노력하고 있습니다.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
