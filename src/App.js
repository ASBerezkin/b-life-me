import React from 'react';
import LeftMenu from "./components/LeftMenu/LeftMenu";

let menuItems = [
    {
        id: 'main',
        href: '#',
        name: 'Главная страница',
        active: false,
    },
    {
        id: 'projects',
        href: '#',
        name: 'Проекты',
        active: false,
    },
    {
        id: 'resume',
        href: '#',
        name: 'Резюме',
        active: false,
    },
    {
        id: 'contacts',
        href: '#',
        name: 'Контакты',
        active: false,
    },
];

function App() {
  return (
    <div className="App">
      <LeftMenu menuList={ menuItems } />
    </div>
  );
}

export default App;
