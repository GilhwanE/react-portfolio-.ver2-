import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as HomeIcon } from '../assets/svg/house-svgrepo-com.svg';

const HomeBtn = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(50, 222, 129, 0.4);
    box-shadow: 0 0 8px 5px rgba(40, 220, 120, 0.2);
  }

  & > *:first-child {
    color: inherit;
  }
`;

const HomeButton = () => {
  return (
    <HomeBtn>
      <Link to="/">
        <HomeIcon width={40} height={35} fill="currentColor" />
      </Link>
    </HomeBtn>
  );
};

export default HomeButton;
