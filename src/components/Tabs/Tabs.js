import React, { useState } from 'react';
import Tab from './Tab';
import TabPanel from './TabPanel';
import './Tabs.scss'

const Tabs = ({ tabElements, tabPanelElements }) => {
  const [active, setActive] = useState('tab_1');
  return (
    <div className="tabs">
      <ul>
        {tabElements.map(el => (
          <Tab name={el.name} isActive={el.id === active} key={el.id} onClick={() => setActive(el.id)}/>
        ))}
      </ul>
      {tabPanelElements.map(el => (
        <TabPanel isActive={el.id === active} key={el.id}>{el.content}</TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
