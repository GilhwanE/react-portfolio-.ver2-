import { motion } from 'framer-motion';
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

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.5 }}
      >
        <Link style={{ color: 'inherit' }} target="_blank" to="/myskills">
          <Githubicon
            width={30}
            height={30}
            color={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.3 }}
      >
        <Link style={{ color: 'inherit' }} to="/">
          <Notionicon
            width={30}
            height={30}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <Link style={{ color: 'inherit' }} to="/">
          <Velogicon
            width={30}
            height={30}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </Icons>
  );
};

export default SocialIcons;
