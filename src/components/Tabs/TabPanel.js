import React from 'react';

const TabPanel = ({ children, isActive }) => {
  return <div className={isActive ? 'show' : 'hide'}>{children}</div>;
};

export default TabPanel;
