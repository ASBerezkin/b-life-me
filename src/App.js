import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Banner from './components/Banner/Banner';
import { data } from './data';
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <LeftMenu menuList={data.menuItems} />
      <Banner title={data.banner.title} subtitle={data.banner.subtitle} />
      <Tabs tabElements={data.tabs} tabPanelElements={data.tabsPanelContent} />
    </div>
  );
}

export default App;
