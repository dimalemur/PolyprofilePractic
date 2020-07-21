import React, { useEffect, useState } from 'react';
import './modalservices.pcss';

export const Modalservices = (props) => (
  <div className={`Modalservices Modalservices_visible_${props.isOpenDialog}`}>
    <div className='Content-Exitbutton'><span onClick={(e) => { props.setOpenDialog(false); }}>X</span></div>

    <div className='Modalservices-Content'>
      <div className='Modalservices-Title'>
        Справка с места работы
      </div>

      <div className='Modalservices-Forminp'>
        <div className='Forminp-Title'>
          Контактные данные
        </div>
        <div className='Forminp-Inpcontent'>
          <div className='InpcontentDS-Form'>
            <label>ФИО</label>
            <span>Иванов Иван Иванович</span>
          </div>
          <div className='InpcontentDS-Form'>
            <label>Структурное подразделение</label>
            <span>Инфокогнитивные технологии</span>
          </div>
          <div className='InpcontentDS-Form'>
            <label>Должность</label>
            <span>Преподаватель</span>
          </div>
          <div className='InpcontentDS-Form'>
            <label htmlFor='mail'>E-mail</label>
            <input type='text' id='mail' />
          </div>
          <div className='InpcontentDS-Form'>
            <label htmlFor='work_telephone'>Рабочий телефон</label>
            <input type='text' id='work_telephone' />
          </div>
          <div className='InpcontentDS-Form'>
            <label htmlFor='mob_telephone'>Мобильный телефон</label>
            <input type='text' id='mob_telephone' />
          </div>
        </div>
      </div>

      <div className='Modalservices-Forminp'>
        <div className='Forminp-Title'>
          Заявка
        </div>
        <div className='Forminp-Inpcontent'>

          <div className='InpcontentDS-Form'>
            <label>Тема</label>
            <span>Справка с места работы</span>
          </div>

          <div className='waySend'>

            <div className='InpcontentDS-Form'>
              <label>Способ получения</label>
            </div>

            <form>
              <div>
                <div className='InpcontentDS-Radio'>
                  <div className='RadioDS-Lbl'>
                    <input name='type1' type='radio' id='rd1' />
                    <label htmlFor='rd1'> На электронную почту</label>
                  </div>
                  <div className='RadioDS-Lbl'>
                    <input className='Rb-DSInp' name='type1' type='radio' id='rd2' />
                    <label className='Rb-DSLbl' htmlFor='rd2'> Получить в МФЦ/отделе</label>
                  </div>
                </div>
              </div>
            </form>

          </div>

          <div className='InpcontentDS-Form'>
            <label>Текст заявки</label>
            <textarea></textarea>
          </div>

          <div className='InpcontentDS-Form'>
            <label>Файл</label>
            <button>Выбрать</button>
          </div>

        </div>
      </div>

      <div className='Modalservices-SuccessDS'>
        <button className = 'Success_gray'>Отправить заявку</button>
        <button className = 'Success_white'>Выбрать другой документ</button>
      </div>
    </div>
  </div >
);
