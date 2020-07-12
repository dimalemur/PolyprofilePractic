import React from 'react';
import './modalmessages.pcss';
import imgSearch from '../../../source/images/icons/img-search.svg';
import avaMes from '../../../source/images/icons/ava_mes.svg';

export const CreateDialog = (props) => (
  <div className='CreateDialog'>
    <div className='CreateDialog-Content'>
      <div className='CrD-Search'>
        <div className='SearchHeader-Title'>
          Создать диалог
        </div>
        <div className='SearchHeader-Field'>
          <img className='imgSearch' src={imgSearch} alt='' />
          <input className='inputField' type='text' placeholder='Введите имя пользователя или номер учебной группы' />
        </div>
      </div>
      <div className='CrD-Choice'>
        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Мирченко Анна Григорьевна
          </div>
        </div>
        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            гр. 191-930
          </div>
        </div>
        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Иванов Иван Иванович
          </div>
        </div>
      </div>
    </div>
  </div>
);
