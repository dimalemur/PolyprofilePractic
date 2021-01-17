/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './messages.pcss';
import Regnavbar from '../regnavbar';
import avaMes from '../../../source/images/icons/ava_mes.svg';
import addFiles from '../../../source/images/icons/add-files.svg';
import imgSearch from '../../../source/images/icons/img-search.svg';
import imgNewChat from '../../../source/images/icons/newChat.svg';
import moreOptions from '../../../source/images/icons/more_options.svg';
import sendMes from '../../../source/images/icons/send_mes.svg';

export const MyMessages = (props) => (
  <div className='MyMessages'>
    <Regnavbar />

    <div className='MyMessages-Inner'>
    <div className='MyMessages-Title'>Сообщения</div>

    <div className='MyMessages-form'>

        <div className="contacts">
          <div className="search">
            <button className='Btn-CreateDialog'>
              <img src={imgNewChat} alt='' />
            </button>
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
                  <p>Романов Дмитрий</p>
                </div>
                <div className="last-mes-new">
                  <p>Привет, у тебя есть домашка, которая была в пятницу? Я дум...</p>
                </div>
              </div>
              <div className="time-new">
                <div className="time">
                  <p>23:19</p>
                </div>
                <div className="new-count">
                  <p>1</p>
                </div>
              </div>
            </div>

            <div className="contact">
              <div className="ava-mes">
                <img src={avaMes} />
              </div>
              <div className="info">
                <div className="name-cont">
                  <p>Карасева Ольга</p>
                </div>
                <div className="last-mes">
                  <p>ок спрошу</p>
                </div>
              </div>
              <div className="time-new">
                <div className="time">
                  <p>16:02</p>
                </div>
              </div>
            </div>

            <div className="contact-Click">
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
              <div className="time-new">
                <div className="time">
                  <p>Чт</p>
                </div>
              </div>
            </div>

            <div className="contact">
              <div className="ava-mes">
                <img src={avaMes} />
              </div>
              <div className="info">
                <div className="name-cont">
                  <p>Сидоров Евгений</p>
                </div>
                <div className="last-mes">
                  <p>Файл: Презентация.pptx</p>
                </div>
              </div>
              <div className="time-new">
                <div className="time">
                  <p>19.12.20</p>
                </div>
              </div>
            </div>
          </div>
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
            <div className="btn-more">
              <button className="more-options">
                <img src={moreOptions} />
              </button>
            </div>
          </div>
          <div className="mess">
            <div className="date">
              Сегодня, 19 ноября 2020
            </div>
            <div className="mes1">
              <div className="text-mes">Добрый день, подскажите, пожалуйста, в какой аудитории будут проходить занятия у группы 190-320?</div>
              <div className="time-mes">11:17</div>
            </div>
            <div className="mes2">
              <div className="text-mes">Здравствуйте, пара переносится на 16:00, аудитория В-410</div>
              <div className="time-mes">11:17</div>
            </div>
          </div>
          <div className="write">
            <button className="add-files">
              <img src={addFiles} />
            </button>
            <input type='text' className="field-write" />
            <button className="send-mes">
              <img src={sendMes} />
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
);
