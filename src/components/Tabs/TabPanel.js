import React from 'react';
import { Transition } from 'react-transition-group';

const TabPanel = ({ children, isActive }) => {
  return (
    <Transition in={isActive}>
      {state => <div className={`tabs__content-${state}`}>{children}</div>}
    </Transition>
  );
};

export default TabPanel;
