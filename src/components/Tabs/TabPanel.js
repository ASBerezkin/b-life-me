import React from 'react';

const TabPanel = ({ children, isActive }) => {
  return <div className={isActive ? "tabs__content" : "tabs__content hide"}>{children}</div>
};

export default TabPanel;
