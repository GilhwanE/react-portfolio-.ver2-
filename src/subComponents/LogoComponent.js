import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
  font-family: 'Courier New', Courier, monospace;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media screen {
  }
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>GH</Logo>;
};

export default LogoComponent;
