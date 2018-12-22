import React from 'react';
import styled from '@emotion/styled';

const SquareContent = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: white;
  opacity: 0;
`;

const SquareDiv = styled.div`
  background-color: ${props => props.colour};
  height: 10rem;
  width: 10rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${SquareContent} {
    opacity: 1;
  }
`;

const Square = ({ colour, content }) => (
  <SquareDiv colour={colour}>
    <SquareContent>{content}</SquareContent>
  </SquareDiv>
);

export default Square;
