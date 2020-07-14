import React from 'react';

const Tab = ({ name, isActive = false, onClick }) => {
  return (
    <li className={isActive ? 'tabs__item tabs__item_active' : 'tabs__item'}>
      <a href="#" className="tabs__link" onClick={onClick}>
        {name}
      </a>
    </li>
  );
};

export default Tab;
