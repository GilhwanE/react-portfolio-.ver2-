import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Githubicon } from '../assets/svg/icons-github.svg';
import { ReactComponent as Notionicon } from '../assets/svg/icons-notion.svg';
import { ReactComponent as Velogicon } from '../assets/svg/icons-velog.svg';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <Link
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/GilhwanE' }}
        >
          <Githubicon width={30} height={30} fill="currentColor" />
        </Link>
      </div>
      <div>
        <NavLink style={{ color: 'inherit' }} to="/">
          <Notionicon width={30} height={30} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: 'inherit' }} to="/">
          <Velogicon width={30} height={30} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
