import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Githubicon } from '../assets/svg/icons-github.svg';
import { motion } from 'framer-motion';

const Box = styled(motion.li)`
  width: 25rem;
  height: 50vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  transform: translateY(15%);

  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
  @media screen and (max-width: 550px) {
    width: 18rem;
    height: 35vh;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.4vw);
`;

const Description = styled.div`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla' sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 10px;
  font-size: calc(0.8em + 0.3vw);
`;

const Image = styled.div`
  width: 100%;
  height: 60%;
  background-size: cover;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center center;
  background-position-y: 0;
  border: 1px solid transparent;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Linkd = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  width: 70%;
  line-height: 1.5;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0 50px;
  font-size: calc(0.5em + 1vw);

  & > * {
    width: 100%;
  }

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.div`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, img } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Image img={img} />
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}> #{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Linkd>
          {demo.map((d, id) => {
            return (
              <Linkd key={id} onClick={() => window.open(`${d}`)}>
                Visit
              </Linkd>
            );
          })}
        </Linkd>
        <Git>
          {github.map((it, id) => {
            return (
              <Githubicon
                width={30}
                height={30}
                key={id}
                onClick={() => window.open(`${it}`)}
              />
            );
          })}
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
