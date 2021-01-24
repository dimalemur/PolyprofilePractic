import React, { useState } from 'react';
import './modalmessages.pcss';
import imgSearch from '../../../source/images/icons/img-search.svg';
import avaMes from '../../../source/images/icons/ava_mes.svg';
import closeForm from '../../../source/images/icons/close_form.svg';
import checked from '../../../source/images/icons/checked.svg';
import unchecked from '../../../source/images/icons/unchecked.svg';

const users = ['Карасева Ольга', 'Иванов Иван Иванович', 'Романов Дмитрий', 'Сидоров Евгений',]

const NewContact = (props) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <div className='newContact' onClick={() => { setChecked(!isChecked) }}>
      <div className='newContact-Image'>
        <img src={avaMes} />
      </div>
      <div className='newContact-Name'>
        {props.name}
      </div>
      <div className="newContact-Choice">
        <img src={(isChecked) ? checked : unchecked} alt="" />
      </div>
    </div>
  )
};

export const CreateDialog = (props) => (
  <div className={`CreateDialog ${props.className}`} style={{ left: props.xpos, top: props.ypos }}>
    <div className='CreateDialog-Content'>
      <div className="close-Form">
        <button className="btn-close" onClick={() => { props.setVisDialog(false) }}>
          <img src={closeForm} />
        </button>
      </div>
      <div className='CrD-Search'>
        <div className='SearchHeader-Title'>
          Создать беседу
        </div>
        <div className='SearchHeader-Field'>
          <input className='inputField' type='text' />
          <img className='imgSearch' src={imgSearch} alt='' />
        </div>
      </div>
      <div className='CrD-Choice'>

        {
          users.map((name, i) => (
            <NewContact key={i} name={name} />
          ))
        }

      </div>

      <div className='CrD-BtnCreate'>
        <button className="btn-CreateD">
          Создать
        </button>
      </div>

    </div>
  </div>
);
