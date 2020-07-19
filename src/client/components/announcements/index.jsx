/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './announcements.pcss';
import Regnavbar from '../regnavbar';
import imgSearch from '../../../source/images/icons/img-search.svg';
import imgMore from '../../../source/images/icons/newsarrow.svg';

export const Announcements = (props) => {
  const [isOpened, setOpen] = React.useState(0);

  return (
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
              <div className={`Article-MoreText_${(isOpened === 1)}`}>
                <p>1)
                   <a href='#'>Создание электронного архива (ЭА)
                  выпусков научных журналов по тематическому направлению "Международные отношения и историко-филологические науки"
                </a> (заявки принимаются до 31.07.2020)
                </p>
                <p>2)
                  <a href='#'>Создание электронного архива (ЭА)
                  выпусков научных журналов по тематическому направлению "Науки о Земле и энергетика"
                </a> (заявки принимаются до 31.07.2020)
                </p>
                <p>3)
                  <a href='#'>Создание электронного архива (ЭА)
                  выпусков научных журналов по тематическому направлению "Химия, биология и физиология"
                </a> (заявки принимаются до 05.08.2020)
                </p>
                <p>4)
                  <a href='#'>Создание электронного архива (ЭА)
                  выпусков научных журналов по тематическому направлению "Сельскохозяйственные науки"
                </a> (заявки принимаются до 05.08.2020)
                </p>
                <p>5) 
                  <a href='#'>Создание электронного архива (ЭА)
                  выпусков научных журналов по тематическому направлению "Общественные науки"
                </a> (заявки принимаются до 05.08.2020)
                </p>
              </div>
              <div className='Article-More'>
                <button className='BtnMore' onClick={() => { setOpen((isOpened === 1) ? 0 : 1); }}>
                  <img src={imgMore} alt='' className={`imgMore_${(isOpened === 1)}`} />
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
              <div className={`Article-MoreText_${(isOpened === 2)}`}>
                <p>
                  <a href='#'>Форум</a> состоится в Белогородском государственном технологическом университете им. В.Г. Шухова (
                    <a href='#'>заявки участников и статьи</a>
                    принимаются до 07.10.2020 года на эл. почту bstu.oonirs@gmail.com)
                </p>
              </div>
              <div className='Article-More'>
                <button className='BtnMore' onClick={() => { setOpen((isOpened === 2) ? 0 : 2); }}>
                  <img src={imgMore} alt='' className={`imgMore_${(isOpened === 2)}`} />
                </button>
              </div>
            </div>
            <div className='Article'>
              <div className='Article-Header'>
                <span className='Header-Title'>Бесплатные семинары по Web of Science в июле</span>
                <span className='Header-Date'>7 июля 2020</span>
              </div>
              <div className='Article-Text'>
                Уважаемые коллеги! Clarivate продолжает обновленную серию бесплатных вебинаров
                на русском языке по работе с системой Web of Science.
              </div>
              <div className={`Article-MoreText_${(isOpened === 3)}`}>
                <p>
                  На сайте <a href='#'>Clarivate</a> можно ознакомиться с тематикой, расписанием и
                   условиями участия. Регистрация необходима отдельно на каждый выбранный Вами вебинар.
                   Участникам, которые прослушают не менее 90% каждого из вебинаров в одной из трех серий,
                   будет отправлен сертификат участника.
                </p>
              </div>
              <div className='Article-More'>
                <button className='BtnMore' onClick={() => { setOpen((isOpened === 3) ? 0 : 3); }}>
                  <img src={imgMore} alt='' className={`imgMore_${(isOpened === 3)}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
