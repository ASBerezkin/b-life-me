import React, { useState } from 'react';
import Tab from './Tab';
import TabPanel from './TabPanel';
import GridContainer from '../GridContainer/GridContainer';
import logo from './icon-tabs.svg'

const Tabs = ({ tabElements, tabPanelElements }) => {
  const [active, setActive] = useState('tab_1');
  const handleClick = (e, el) => {
      e.preventDefault();
      setActive(el.id)
  }
  return (
    <div className="tabs">
      <GridContainer>
        <ul className="tabs-items">
            <li className="tabs__header"><img className="tabs__logo" src={logo} alt="Резюме"/>Резюме</li>
          {tabElements.map(el => (
            <Tab name={el.name} isActive={el.id === active} key={`tabs_${el.id}`} onClick={(e) => handleClick(e, el)} />
          ))}
        </ul>
        <div className="tabs__container">
          {tabPanelElements.map(el => (
            <TabPanel isActive={el.id === active} key={`tabpanel_${el.id}`}>
              {el.content}
            </TabPanel>
          ))}
        </div>
      </GridContainer>
    </div>
  );
};

export default Tabs;
