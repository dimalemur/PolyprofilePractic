/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './messages.pcss';
import Regnavbar from '../regnavbar';
import avaMes from '../../../source/images/icons/ava_mes.svg';
import addFiles from '../../../source/images/icons/add-files.svg';
import imgSearch from '../../../source/images/icons/img-search.svg';
import imgNewChat from '../../../source/images/icons/newChat.svg';

export const MyMessages = (props) => (
  <div className='MyMessages'>
    <Regnavbar />

    <div className='MyMessages-Inner'>
    <div className='MyMessages-Title'>Сообщения</div>

    <div className='MyMessages-form'>

        <div className="contacts">
          <div className="search">
            <input type='text' placeholder='Поиск' className="field-search" />
            <button className="img-search">
              <img src={imgSearch} alt='' />
            </button>
          </div>
          <div className="list-contacts">
            <div className="contact">
              <div className="ava-mes">
                <img src={avaMes} />
              </div>
              <div className="info">
                <div className="name-cont">
                  <p>Иванов Иван Иванович</p>
                </div>
                <div className="last-mes">
                  <p>Здравствуйте, пара переносится на 16:00, аудитория В-410</p>
                </div>
              </div>
            </div>
            <div className="contact">
              <div className="ava-mes">
                <img src={avaMes} />
              </div>
              <div className="info">
                <div className="name-cont">
                  <p>Мирченко Анна Григорьевна</p>
                </div>
                <div className="last-mes">
                  <p>[Вы]: Привет; )</p>
                </div>
              </div>
            </div>
          </div>
          <button className='Btn-CreateDialog'>
            <img src={imgNewChat} alt='' />
          </button>
        </div>

        <div className="dialog">
          <div className="header-dialog">
            <div className="ava-mes">
              <img src={avaMes} />
            </div>
            <div className="info">
              <div className="name">Иванов Иван Иванович</div>
              <div className="post">Преподаватель</div>
            </div>
          </div>
          <div className="mess">
            <div className="date">
              23 апреля 2019
            </div>
            <div className="mes1">
              <div className="text-mes">Здравствуйте, а в каком кабинете будет проводиться пара у группы 191-310?</div>
              <div className="time-mes tm1">12:20</div>
            </div>
            <div className="mes2">
              <div className="text-mes">Здравствуйте, пара переносится на 16:00, аудитория В-410</div>
              <div className="time-mes tm2">12:21</div>
            </div>
          </div>
          <div className="write">
            <input type='text' className="field-write" placeholder='Введите сообщение' />
            <button className="add-files">
              <img src={addFiles} />
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
);
