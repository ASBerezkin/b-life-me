import React from 'react';
import LeftMenu from "./components/LeftMenu/LeftMenu";

const menuItems = {
    1: {
        href: '#',
        name: 'Главная страница'
    },
    2: {
        href: '#',
        name: 'Проекты'
    },
    3: {
        href: '#',
        name: 'Резюме'
    },
    4: {
        href: '#',
        name: 'Контакты'
    },
};

function App() {
  return (
    <div className="App">
      <LeftMenu menuList={ menuItems } />
    </div>
  );
}

export default App;
