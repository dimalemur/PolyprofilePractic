import React from 'react';
import './modalmessages.pcss';
import imgSearch from '../../../source/images/icons/img-search.svg';
import avaMes from '../../../source/images/icons/ava_mes.svg';
import closeForm from '../../../source/images/icons/close_form.svg';

export const CreateDialog = (props) => (
  <div className='CreateDialog'>
    <div className='CreateDialog-Content'>
    <div className="close-Form">
      <button className="btn-close">
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

        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Карасева Ольга
          </div>
          <div className="newContact-Choice">
            <label><input className="check-choice" type="checkbox" /></label>
          </div>
        </div>

        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Иванов Иван Иванович
          </div>
          <div className="newContact-Choice">
            <label><input className="check-choice" type="checkbox" /></label>
          </div>
        </div>

        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Романов Дмитрий
          </div>
          <div className="newContact-Choice">
            <label><input className="check-choice" type="checkbox" /></label>
          </div>
        </div>

        <div className='newContact'>
          <div className='newContact-Image'>
            <img src={avaMes} />
          </div>
          <div className='newContact-Name'>
            Сидоров Евгений
          </div>
          <div className="newContact-Choice">
            <label><input className="check-choice" type="checkbox" /></label>
          </div>
        </div>

      </div>

      <div className='CrD-BtnCreate'>
        <button className="btn-CreateD">
          Создать
        </button>
      </div>

    </div>
  </div>
);
