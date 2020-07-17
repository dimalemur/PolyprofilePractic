import React from 'react';
import './blanks.pcss';
import Regnavbar from '../regnavbar';

export const Blanks = (props) => (
  <div className='Blanks'>
    <Regnavbar />

    <div className='Blanks-Inner'>
      <div className='Blanks-Title Title'>
        Бланки документов
      </div>
      <div className='Blanks-Content'>

        <div id='library' className='BlanksBlock'>
          <div className='BB-Title'>
            Электронная библиотека
          </div>
          <div className='BB-Links'>
            <p>
              <a href='#'>Согласие автора на использование произведения</a>
            </p>
          </div>
        </div>

        <div id='job' className='BlanksBlock'>
          <div className='BB-Title'>
            Трудоустройство
          </div>
          <div className='BB-Links'>
            <p>
              <a href='#'>Анкета-согласие работника на обработку персональных данных</a>
            </p>
            <p>
              <a href='#'>Контрольный лист</a>
            </p>
            <p>
              <a href='#'>Личный листок</a>
            </p>
            <p>
              <a href='#'>Лист ознакомления с должностной инструкцией, положением о структурном подразделении и локальными нормативными актами</a>
            </p>
            <p>
              <a href='#'>Заявление для перечисления заработной платы по реквизитам</a>
            </p>
            <p>
              <a href='#'>Заявление на прием</a>
            </p>
          </div>
        </div>

        <div id='employer' className='BlanksBlock'>
          <div className='BB-Title'>
            Заявление работодателю
          </div>
          <div className='BB-Links'>
            <p>
              <a href='#'>Заявление на материальную помощь</a>
            </p>
            <p>
              <a href='#'>Заявление на перевод</a>
            </p>
            <p>
              <a href='#'>Заявление на перенос отпуска</a>
            </p>
            <p>
              <a href='#'>Заявление на увольнение</a>
            </p>
            <p>
              <a href='#'>Заявление о предоставлении отпуска</a>
            </p>
            <p>
              <a href='#'>Заявление о предоставлении дополнительного отпуска по Коллективному договору</a>
            </p>
            <p>
              <a href='#'>Заявление о привлечении к работе в выходной день (оплата в двойном размере)</a>
            </p>
            <p>
              <a href='#'>Заявление о привлечении к работе в выходной день (оплата в одинарном размере)</a>
            </p>
            <p>
              <a href='#'>Заявление о прохождении диспансеризации</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
);
