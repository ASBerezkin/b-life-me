import React, { useRef } from "react";
import { Transition } from 'react-transition-group';

const TabPanel = ({ children, isActive }) => {
  const domNodeRef = useRef(null)
  return (
    <Transition in={isActive} timeout={300} nodeRef={domNodeRef}>
      {state => <div ref={domNodeRef} className={`tabs__content-${state}`}>{children}</div>}
    </Transition>
  );
};

export default TabPanel;
