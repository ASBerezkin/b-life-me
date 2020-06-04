import React from 'react';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Banner from './components/Banner/Banner';
// import GridContainer from "./components/GridContainer/GridContainer";
import { data } from './data';

function App() {
  return (
    <div className="App">
      <LeftMenu menuList={data.menuItems} />
      <Banner title={data.banner.title} subtitle={data.banner.subtitle} />
    </div>
  );
}

export default App;
