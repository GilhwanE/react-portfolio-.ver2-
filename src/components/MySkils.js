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
import JSicon from '../assets/images/JS-icon.png';
// import Fronticon from '../assets/images/frontend-icon.png';
import BigTitle from '../subComponents/BigTitle';

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
  cursor: pointer;

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
  position: relative;

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.5vw);
  padding: 0.5rem 0;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    list-style: none;
    margin-bottom: 1rem;

    &:first-child {
      margin-top: 2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }

    p {
      margin-left: 10px;
    }

    &:first-child::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 0px;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      border: 2px solid ${(props) => props.theme.text};

      ${Main}:hover & {
        border: 2px solid ${(props) => props.theme.body};
      }
    }
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkils = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <HomeButton />
        <Main>
          <Title>
            <strong>Frontend Developer</strong>
          </Title>
          <Title>
            <h6>기억의 남는 컨테츠를 만들고 싶습니다.</h6>
          </Title>
          <Description>
            <ul>
              <li>
                <img width={60} height={60} src={HTMLicon} alt="icon" />
                <p>
                  <strong>시멘틱 마크업</strong>을 준수하며, 웹표준성,
                  웹접근성의 개념을 이해하고 준수합니다.
                </p>
              </li>

              <li>
                <img width={60} height={60} src={CSSicon} alt="icon" />
                <p>
                  <strong>Media query</strong>를 이용하여 반응형 페이지를
                  제작합니다. PSD 디자인시안과 동일하게 제작합니다.
                </p>
              </li>

              <li>
                <img width={60} height={60} src={JSicon} alt="icon" />
                <p>
                  <strong>DOM의 개념</strong>을 이해하고 객체들의 event 기능을
                  구현할 수 있습니다.
                </p>
              </li>
              <li>
                <img width={60} height={60} src={REACTicon} alt="icon" />
                <p>
                  <strong>Component의 개념</strong> 을 이해하고,
                  useState,useEffect <strong>Hooks</strong>에 대해 이해하고
                  사용할 수 있습니다. 렌더링 성능 최적화하는 방식과 방법에
                  대해서 공부하고 있습니다.
                </p>
              </li>

              <li>
                <img width={60} height={60} src={SASSicon} alt="icon" />
                <p>
                  <strong>Sass문법(Syntax)을</strong> 이해하며, Mixins을
                  사용하여 재사용 할 수 있도록 합니다.
                </p>
              </li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="Skills" top="80%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkils;
