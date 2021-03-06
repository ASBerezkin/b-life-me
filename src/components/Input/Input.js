import React, { useState } from 'react';
import { Styled } from './styled';

const Input = ({ label, placeholder, hasError = false, errorText, id, name }) => {
  const [value, setValue] = useState('');
  return (
    <Styled.InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        id={id}
        name={name}
      />
      {hasError && <p>{errorText}</p>}
    </Styled.InputWrapper>
  );
};

export default Input;
