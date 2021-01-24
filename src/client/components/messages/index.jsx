/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './messages.pcss';
import Regnavbar from '../regnavbar';
import avaMes from '../../../source/images/icons/ava_mes.svg';
import addFiles from '../../../source/images/icons/add-files.svg';
import imgSearch from '../../../source/images/icons/img-search.svg';
import imgNewChat from '../../../source/images/icons/newChat.svg';
import moreOptions from '../../../source/images/icons/more_options.svg';
import sendMes from '../../../source/images/icons/send_mes.svg';
import search from '../../../source/images/icons/search_icon.png';
import garbage from '../../../source/images/icons/garbage_icon.png';
import screp from '../../../source/images/icons/screp_icon.png';
import { CreateDialog } from '../modalmessages';


const MoreAction = (props) => {
  return (
    <div className={`MoreAction ${props.className}`} style={{ left: props.xpos, top: props.ypos }}>
      <div className="MoreAction-MoreActionList">
        <div className='MoreActionList-Element'><img src={search} alt="" />  Удалить диалог</div>
        <div className='MoreActionList-Element'><img src={garbage} alt="" />  Поиск по сообщениям</div>
        <div className='MoreActionList-Element'><img src={screp} alt="" />  Показать вложения</div>
      </div>
    </div>
  )
}

export const MyMessages = (props) => {
  const [isVisDialog, setVisDialog] = useState(false);
  const [isVisMore, setVisMore] = useState(false);
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);

  const addMeet = (event) => {
    setXpos(event.screenX - 60);
    setYpos(event.screenY - 60);
    setVisDialog(!isVisDialog)
  }

  const seeMore = (event) => {
    setXpos(event.screenX);
    setYpos(event.screenY);
    setVisMore(!isVisMore)
  }

  return (
    <div className='MyMessages'>
      <Regnavbar />

      <CreateDialog className={(isVisDialog) ? `CreateDialog_visible` : ''} xpos={xpos} ypos={ypos} setVisDialog={setVisDialog} />
      <MoreAction className={(isVisMore) ? `MoreAction_visible` : ''} xpos={xpos} ypos={ypos} />
      <div className='MyMessages-Inner'>
        <div className='MyMessages-Title'>Сообщения</div>

        <div className='MyMessages-form'>

          <div className="contacts">
            <div className="search">
              <button className='Btn-CreateDialog' onClick={addMeet} >
                <img src={imgNewChat} alt='' />
              </button>
              <input type='text' placeholder='Поиск' className="field-search" />
              <button className="img-search">
                <img src={imgSearch} alt='' />
              </button>
            </div>
            <div className="list-contacts">

              <div className="contact" >
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

              <div className="contact" >
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

              <div className="contact-Click" >
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

              <div className="contact" >
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
                <button className="more-options" onClick={seeMore}>
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
  )
};
