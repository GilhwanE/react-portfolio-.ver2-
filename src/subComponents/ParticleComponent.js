import React from 'react';
import styled from 'styled-components';
// config files
import ParticleAnimation from 'react-particle-animation';

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const ParticleComponent = (props) => {
  return (
    <Box>
      <ParticleAnimation
        numParticles={300}
        interactive={false}
        background={{ r: 100, g: 100, b: 100, a: 255 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default ParticleComponent;
