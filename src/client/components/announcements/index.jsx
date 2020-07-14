import React from 'react';
import './announcements.pcss';
import Regnavbar from '../regnavbar';
import imgSearch from '../../../source/images/icons/img-search.svg';
import imgMore from '../../../source/images/icons/newsarrow.svg';

export const Announcements = (props) => (
  <div className='Announcements'>
    <Regnavbar />
    <div className='Announcements-Inner'>
      <div className='Announcements-Title Title'>
        Анонсы научных мероприятий
      </div>
      <div className='Announcements-Content'>
        <div className='ControlPanel'>
          <div className='ControlPanel-Filter'>
            <select className='SelectDate'>
              <option selected value='date1'>Дата1</option>
              <option value='date2'>Дата2</option>
            </select>
          </div>
          <div className='ControlPanel-Search'>
            <input type='text' placeholder='Введите название мероприятия или ключевые слова' className='SearchText' />
            <button className='ButtonSearch'>
              <img src={imgSearch} alt='' width='15px' height='15px' />
            </button>
          </div>
        </div>
        <div className='ArticlesList'>
          <div className='Article'>
            <div className='Article-Header'>
              <span className='Header-Title'>Конкурсы ФЦП</span>
              <span className='Header-Date'>9 июля 2020</span>
            </div>
            <div className='Article-Text'>
              Уважаемые коллеги, доводим до Вашего сведения, что ФЦП объявил конкурсы:
            </div>
            <div className='Article-More'>
              <button className='BtnMore'>
                <img src={imgMore} alt='' />
              </button>
            </div>
          </div>
          <div className='Article'>
            <div className='Article-Header'>
              <span className='Header-Title'>XII Международный молодежный форум</span>
              <span className='Header-Date'>9 июля 2020</span>
            </div>
            <div className='Article-Text'>
              Уважаемые коллеги, 14-15 октября 2020 года, приглашаем Вас принять участе в XII Международном молодежном форуме «Образование. Наука. Производство»
            </div>
            <div className='Article-More'>
              <button className='BtnMore'>
                <img src={imgMore} alt='' />
              </button>
            </div>
          </div>
          <div className='Article'>
            <div className='Article-Header'>
              <span className='Header-Title'>Бесплатные семинары по Web of Science в июле</span>
              <span className='Header-Date'>7 июля 2020</span>
            </div>
            <div className='Article-Text'>
              Уважаемые коллеги! Clarivate продолжает обновленную серию бесплатных вебинаров на русском языке по работе с системой Web of Science.
            </div>
            <div className='Article-More'>
              <button className='BtnMore'>
                <img src={imgMore} alt='' />
              </button>
            </div>
          </div>




        </div>
      </div>
    </div>
  </div>
);
