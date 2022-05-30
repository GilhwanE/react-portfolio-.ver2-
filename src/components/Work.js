import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Themes';
import { motion } from 'framer-motion';

import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import LogoComponent from '../subComponents/LogoComponent';

import { WorkData } from '../data/WorkData';
import Card from '../subComponents/Card';
import { ReactComponent as CenterImg } from '../assets/svg/center-img.svg';
import BigTitle from '../subComponents/BigTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;

  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 3rem;
  bottom: 1rem;
  width: 100px;
  height: 100px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Work = () => {
  const ref = useRef(null);
  const centerimg = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      centerimg.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };
    window.addEventListener('scroll', rotate);
    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {WorkData.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
        <Rotate ref={centerimg}>
          <CenterImg width={100} height={100} color={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default Work;
