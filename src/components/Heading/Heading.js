import React from 'react';
import { Styled } from './styled';

export const Heading = ({ align, uppercase, color, h, children }) => {
  return (
    <Styled.Title align={align} uppercase={uppercase} color={color} as={`h${h}`}>
      {children}
    </Styled.Title>
  );
};
