/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './centers.pcss';
import Regnavbar from '../regnavbar';

export const Centers = (props) => (
  <div className='Centers'>
    <Regnavbar />

    <div className='Centers-Inner'>
      <div className="Centers-Title Title">
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
        <div>
          <select className="select-direction">
            <option value="izdat_journal">Институт издательского дела и журналистики</option>
            <option value="communication_media">Институт коммуникаций и медиабизнеса</option>
            <option value="printmedia_Favorsky">Институт принтмедиа и информационных технологий / Институт графики и искусства книги имени В. А. Фаворского</option>
            <option value="transport">Транспортный факультет</option>
            <option selected value="inform_tech">Факультет информационных технологий</option>
            <option value="machine_urban">Факультет Машиностроения и Урбанистики и городского хозяйства в части направлений подготовки энергетическое машиностроение, электроэнергетика и электротехника, теплоэнергетика и теплотехника, строительство, радиотехника</option>
            <option value="chem_bio_tech">Факультет Химической технологии и биотехнологии и Урбанистики и городского хозяйства в части направлений подготовки (специальностей) горное дело, нефтегазовое дело, прикладная геология, технология геологической разведки</option>
          </select>
        </div>
        <div className='info-block'>
          <div className='item'>
            <span className='item-title'>Адрес: </span>107023, г. Москва, ул. Большая Семеновская, 38, ауд В-101, В102
          </div>
          <div className='item'>
            <span className='item-title'>Телефон: </span>(495) 223-05-23, доб. 1175, 1375, 1475 либо (495) 223-05-39
          </div>
          <div className='item'>
            <span className='item-title'>E-mail: </span>crs-informatika@mospolytech.ru
          </div>
        </div>
      </div>
    </div>

  </div>
);
