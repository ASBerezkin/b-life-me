import styled from 'styled-components';

const InputWrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  & input {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    padding: 20px;
    margin-top: 5px;
    background-color: #fff;
    border: 2px solid transparent;
    border-radius: 3px;
    outline: none;
    transition: all 0.3s linear;
    &:hover {
      border: 2px solid #58a5ff;
      cursor: pointer;
    }
    &:focus-within {
      border: 2px solid #006be8;
    }
  }
  & label {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Styled = {
  InputWrapper,
};
