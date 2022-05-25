import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Myimg from '../assets/images/me-img.jpg';

const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 40vh;
  display: flex;
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .profile {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: 2rem;
  padding: 1.5rem;
  line-height: 1.5;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  cursor: pointer;
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'just', duration: 1, delay: 1.1 }}
    >
      <SubBox>
        <Text>
          <h1>안녕하세요,</h1>
          <h4>프론트엔드 개발자 김길환입니다.</h4>
          <h6>글쓰기를 좋아하고 기억에 남는 컨텐츠를 제공하고 싶습니다.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <img className="profile" src={Myimg} alt="profile img" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
