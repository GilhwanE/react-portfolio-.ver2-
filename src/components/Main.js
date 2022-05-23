import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeButton from '../subComponents/HomeButton';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  font-size: 1.4rem;
  top: 50%;
  right: 2rem;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Bottombar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const SKILS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent />
        <SocialIcons />

        <WORK to="/work">
          <h2>work</h2>
        </WORK>

        <Bottombar>
          <ABOUT to="/about">
            <h2>about</h2>
          </ABOUT>
          <SKILS to="/myskils">
            <h2>myskils</h2>
          </SKILS>
        </Bottombar>
      </Container>
    </MainContainer>
  );
};

export default Main;
