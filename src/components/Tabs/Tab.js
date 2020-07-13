import React from 'react';

const Tab = ({ name, isActive = false, onClick }) => {
  return (
    <li className={isActive ? 'active' : 'disabled'} onClick={onClick}>
      {name}
    </li>
  );
};

export default Tab;
