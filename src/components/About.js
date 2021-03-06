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
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        <Spaceman>
          <img src={astrounaut} alt="spaceman" />
        </Spaceman>
        <Main>
          π μλνμΈμ, νλ‘ νΈμλ κ°λ°μ κΉκΈΈνμλλ€.
          <br />
          <br /> μ½λ©νλ μκ° λ°λ‘ μκ°μ μΌλ‘ ννλλ μ¬μ΄νΈλ€μ λ³΄λ©΄μ ν₯λ―Έλ₯Ό
          λλΌκ³  νλ‘ νΈμλ κ°λ°μκ° λμλ λͺ©νκ° μκ²Όμ΅λλ€.
          <br />
          <br />
          νλ‘ νΈ κ°λ°μκ° λκΈ° μν΄μ HTML, CSS, JavaScriptμ κ΄λ ¨λ κ°μλ€μ
          λ³΄λ©΄μ κΈ°μ΄λ₯Ό λ€μΉκ³  μΉμ¬μ΄νΈλ₯Ό λ§λ€μ΄μμ΅λλ€. νλ©΄κ΅¬μ±μ μ΄λ»κ²
          ν μ§?, μ¬μ©μλ€μ΄ μ¬μ©νλ©΄μ μ΄λ νμ μ΄ λΆνΈν κΉ?
          <br />
          <br /> UI/UXμ κ΄μ μμ κ³ λ―Όλ€μ νλ©΄μ μ΄λ»κ² νλ©΄ μ¬μ©μλ€μκ²
          λ§μ‘±κ°μ μ€ μ μλμ§ κ³ λ―Όλ€μ λ§μ΄ νμ΅λλ€. κ·Έλ° κ³ λ―Όλ€μ΄ μ¬λ―Έμκ²
          λ€κ°μμλ λ³΄λ€ λμ± μ¬μ©μλ€ μν μΌλ€μ μνν΄μΌκ² λ€λ λ€μ§μ κ°μ§λ©°
          νλ‘ νΈ κ°λ°μκ° λκΈ° μν΄μ λΈλ ₯νκ³  μμ΅λλ€.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
