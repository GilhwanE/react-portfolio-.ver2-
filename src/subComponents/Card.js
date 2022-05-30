import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Githubicon } from '../assets/svg/icons-github.svg';

const Box = styled.li`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;

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
`;

const Title = styled.h2`
  font-size: calc(1em + 0.4vw);
`;

const Description = styled.p`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla' sans-serif;
  font-weight: 500;
`;

const Tags = styled.p`
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
  height: auto;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Linkd = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(0.6em + 1vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Card = (props) => {
  const { id, name, description, tags, demo, github, img } = props.data;

  return (
    <Box key={id}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Image>{img}</Image>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}> #{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Linkd to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Linkd>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Githubicon width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
