import React from 'react';
import Input from '../Input/Input';
import GridContainer from '../GridContainer/GridContainer';
import { Styled } from "./styled";
import { Heading } from "../Heading/Heading";

export const Form = () => {
  return (
    <GridContainer>
      <Styled.FormWrapper>
        <Input name="fio" label="Фамилия имя отчество" id="fio" placeholder="Фамилия имя отчество" errorText="Поле заполнено неверно" hasError={false} />
        <Input name="email" label="Ваш e-mail для связи" id="email" placeholder="aberezkin@mail.ru" errorText="Поле заполнено неверно" hasError={false} />
      </Styled.FormWrapper>
      {/*<Heading align="left" color="#000" h={4}>Форма для связи</Heading>*/}
    </GridContainer>
  );
};
