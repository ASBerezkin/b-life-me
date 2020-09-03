import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  text-align: ${({ align }) => align};
  letter-spacing: 0.16em;
  text-transform: ${({uppercase}) => uppercase ? 'uppercase' : null };
  font-variant: small-caps;
  color: ${({ color }) => color};
  @media (min-width: 1024px) {
    font-size: 64px;
    line-height: 56px;
  }
`;

export const Styled = {
  Title
};
