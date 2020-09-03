import React from 'react';
import me from './photo.jpeg';
import GridContainer from '../../GridContainer/GridContainer';

const Hh = () => {
  return (
    <GridContainer>
      <div className="hh">
        <div className="hh__wrapper-photo">
          <img src={me} alt="" className="hh__photo" />
        </div>
        <div className="hh__wrapper">
          <h2 className="banner__title hh__header">Frontend Developer / React</h2>
          <h3 className="hh__subheader">Опыт работы</h3>
          <p className="hh__content">Последнее место работы <b>ПАО "МТС-Банк"</b></p>
          <p className="hh__content">Работаю Frontend-разработчиком с августа 2019 года</p>
          <h3 className="hh__subheader">Ключевые навыки</h3>
          <div className="hh__wrapper-skills">
            <div className="hh__skill">JS</div>
            <div className="hh__skill">TYPESCRIPT</div>
            <div className="hh__skill">REACT</div>
            <div className="hh__skill">REDUX</div>
            <div className="hh__skill">SSR</div>
            <div className="hh__skill">NEXT JS</div>
            <div className="hh__skill">STYLED-COMPONENTS</div>
            <div className="hh__skill">WEBPACK</div>
            <div className="hh__skill">BABEL</div>
            <div className="hh__skill">ESLINT</div>
            <div className="hh__skill">GIT / GIT FLOW</div>
          </div>
          <h3 className="hh__subheader">Достижения на прошлом месте работы</h3>
          <p className="hh__content">
            Разработка новых компонентов с использованием фирменного UI-Kit
          </p>
          <p className="hh__content">
            Перенос и разработка новых компонентов на TypeScript
          </p>
          <p className="hh__content">
            Интеграция с сервисом госуслуг: взаимодействие с back-end командой, заполнение полей формы из профиля пользователя госуслуг
          </p>
        </div>
      </div>
    </GridContainer>
  );
};

export default Hh;
