export const data = {
  menuItems: [
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
  ],
  banner: {
    title: 'Березкин Александр',
    subtitle: 'Frontend-разработчик',
  },
  tabs: [
    {id: 'tab_1', name: 'Резюме. Как на hh.ru'},
    {id: 'tab_2', name: 'Портфолио. Накидать работы?'},
    {id: 'tab_3', name: 'Контакты. Тут будет форма'},
  ],
  tabsPanelContent: [
    {id: 'tab_1', content: `<h1>Заголовок 1</h1>`, active: true},
    {id: 'tab_2', content: `<h1>Заголовок 2</h1>`, active: false},
    {id: 'tab_3', content: `<h1>Заголовок 3</h1>`, active: false},
  ]
};
