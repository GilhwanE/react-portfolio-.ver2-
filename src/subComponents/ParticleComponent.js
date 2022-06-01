import React from 'react';
import styled from 'styled-components';
// config files
import Particles from 'react-tsparticles';
import particleConfig from '../config/particlesjs-config';

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;

const ParticleComponent = () => {
  return (
    <Box>
      <Particles params={particleConfig} />
    </Box>
  );
};

export default ParticleComponent;
