import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import LogoComponent from '../subComponents/LogoComponent';

//Icons images
import HTMLicon from '../assets/images/HTML-icon.png';
import CSSicon from '../assets/images/CSS-icon.png';
import SASSicon from '../assets/images/SASS-icon.png';
import REACTicon from '../assets/images/REACT-icon.png';
import Fronticon from '../assets/images/frontend-icon.png';

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
  width: 45vw;
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

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.5vw);
  padding: 0.5rem 0;

  dd {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkils = () => {
  return (
    <>
      <LogoComponent theme="light" />
      <HomeButton theme="light" />
      <SocialIcons theme="light" />

      <ThemeProvider theme={lightTheme}>
        <Box>
          <Main>
            <Title>
              <img width={70} height={70} src={Fronticon} alt="icon" />
              <strong>Frontend Developer</strong>
            </Title>
            <Description>기억의 남는 컨테츠를 만들고 싶습니다.</Description>
            <Description>
              <dl>
                <dt>
                  <img width={70} height={70} src={HTMLicon} alt="icon" />
                </dt>
                <dd>
                  시멘틱 마크업을 준수하며, 웹표준성, 웹접근성의 개념을 이해하고
                  준수합니다
                </dd>
                <dt>
                  <img width={70} height={70} src={CSSicon} alt="icon" />
                </dt>
                <dd>
                  media query를 이용하여 반응형 페이지를 제작합니다. PSD
                  디자인시안과 동일하게 제작합니다.
                </dd>
                <dt>JavaScript </dt>
                <dd>
                  DOM의 개념을 이해하고 객체들의 event 기능을 구현할 수
                  있습니다.
                </dd>
                <dt>
                  <img width={70} height={70} src={REACTicon} alt="icon" />
                </dt>
                <dd>
                  Component의 개념을 이해하고, useState,useEffect Hooks에 대해
                  이해하고 사용할 수 있습니다.
                </dd>
                <dt>
                  <img width={70} height={70} src={SASSicon} alt="icon" />
                </dt>
                <dd>
                  Component의 개념을 이해하고, useState,useEffect Hooks에 대해
                  이해하고 사용할 수 있습니다.
                </dd>
              </dl>
            </Description>
            <Description>
              <ul>
                <Title>Interlasted skills</Title>
                <li>Node.js </li>
                <li>Swift </li>
                <li>flutter </li>
                <li>three.js </li>
              </ul>
            </Description>
          </Main>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MySkils;
