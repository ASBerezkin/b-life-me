import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Banner from './components/Banner/Banner';
import { data } from './data';
import Tabs from './components/Tabs/Tabs';
import Hh from './components/Tabs/Content/Hh';

function App() {
  const content = [{ id: 'tab_1', content: <Hh />, active: true }];
  return (
    <div className="App">
      <LeftMenu menuList={data.menuItems} />
      <Banner title={data.banner.title} subtitle={data.banner.subtitle} />
      <Tabs tabElements={data.tabs} tabPanelElements={content} />
    </div>
  );
}

export default App;
