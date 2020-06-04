import React from 'react';

const MenuItem = ({ href, name, onClick, isActive }) => {
  return (
    <li className={isActive ? 'menu__item menu__item_active' : 'menu__item'} onClick={onClick}>
      <a href={href} className="menu__link">
        {name}
      </a>
    </li>
  );
};

export default MenuItem;
