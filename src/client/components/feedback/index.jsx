/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './feedback.pcss';
import Regnavbar from '../regnavbar';

export const Feedback = (props) => (
  <div className='Feedback'>
    <Regnavbar />

    <div class='Feedback-Inner'>
      <div class="Feedback-Title Title">
        Центры по работе со студентами
      </div>
      <div className='Block-form'>
        <div className='title-text'>
          Контактные данные главного офиса для обращения по общим вопросам
        </div>
        <div className='info-block'>
          <div className='item'>
            <span className='item-title'>Адрес: </span>г. Москва, ул. Большая Семёновская, д. 38, ауд. А-412
          </div>
          <div className='item'>
            <span className='item-title'>Телефон: </span>(495) 223-05-23 доб. 1116
          </div>
          <div className='item'>
            <span className='item-title'>E-mail: </span>y.e.gorina@mospolytech.ru, e.u.lugina@mospolytech.ru
          </div>
        </div>
        <div className='additional'>
          Для получения более конкретной информации укажите свое направление, чтобы узнать данные Вашего ЦРС
        </div>
      </div>
    </div>

  </div>
);
