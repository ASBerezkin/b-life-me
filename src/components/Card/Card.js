import React from 'react';
import GridContainer from '../GridContainer/GridContainer';
// Карточка для проекта
const Card = () => {
  return (
    <GridContainer>
      <div className="card">
        <div className="card__text-container">
          <h3 className="card__header">Название</h3>
          <h5 className="card__subheader">Подназвание</h5>
        </div>
        <img src="#" alt="" className="card__media" />
        <div className="card__description">
          <p>Описание</p>
        </div>
        <div className="card__buttons">
          <a href="#" className="card__button">Ссылка</a>
        </div>
      </div>
    </GridContainer>
  );
};

export default Card;
