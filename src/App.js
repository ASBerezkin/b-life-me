import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Banner from './components/Banner/Banner';
import { data } from './data';
import Tabs from './components/Tabs/Tabs';
import Hh from './components/Tabs/Content/Hh';
import { Form } from "./components/Form/Form";

function App() {
  const content = [{ id: 'tab_1', content: <Hh />, active: true }];
  return (
    <div className="App">
      <LeftMenu menuList={data.menuItems} />
      <Banner title={data.banner.title} subtitle={data.banner.subtitle} />
      <Tabs tabElements={data.tabs} tabPanelElements={content} />
      <Form />
    </div>
  );
}

export default App;
