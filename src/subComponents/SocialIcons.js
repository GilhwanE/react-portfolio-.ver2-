import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Githubicon } from '../assets/svg/icons-github.svg';
import { ReactComponent as Notionicon } from '../assets/svg/icons-notion.svg';
import { ReactComponent as Velogicon } from '../assets/svg/icons-velog.svg';
import { darkTheme } from '../components/Themes';

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
  background-color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <Link
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/GilhwanE' }}
        >
          <Githubicon
            width={30}
            height={30}
            color={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </div>
      <div>
        <Link style={{ color: 'inherit' }} to="/">
          <Notionicon
            width={30}
            height={30}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </div>
      <div>
        <Link style={{ color: 'inherit' }} to="/">
          <Velogicon
            width={30}
            height={30}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
