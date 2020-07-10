import React from 'react';
import './feedbackform.pcss';
import Regnavbar from '../regnavbar';

export const FeedbackForm = (props) => (
  <div className='FeedbackForm'>
    <Regnavbar />
    <div className='FeedbackForm-Inner'>
      <div className='FeedbackForm-Title Title'>
        Форма обратной связи
      </div>

      <div className='FeedbackForm-Content'>
        <div className='FbForm-Title'>
          Для рассмотрения вашей проблемы, пожалуйста, заполните данные в форме, расположенной ниже
        </div>
        <div className='FbForm-Text'>
          <span className='Text-Attention'>Обратите внимание</span>: на почтовые адреса Microsoft (@hotmail.com, @live.com, @live.ru, @msn.com, @passport.com, @outlook.com) ответ не придет по техническим причинам. Используйте почту на других доменах (@mail.ru, @yandex.ru, @gmail.com и т.д.)
        </div>
        <div className='FbForm-Form'>
          <div className='Group-Labels'>
            <p className='Fb-Label'>ФИО</p>
            <p className='Fb-Label'>E-mail</p>
            <p className='Fb-Label'>Телефон</p>
            <p className='Fb-Label'>Тематика обращения</p>
          </div>
          <div className='Group-Fields'>
            <input className='Fb-Field' type='text' />
            <input className='Fb-Field' type='text' />
            <input className='Fb-Field' type='text' />
            <input className='Fb-Field' type='text' />
          </div>
          <div className='Group-YourMes'>
            <p className='Fb-LabYourMes'>Ваше сообщение</p>
            <textarea className='Fb-TextYourMes'></textarea>
          </div>
        </div>
        <div className='FbForm-Buttons'>
          <button className='Btn-Send'>Отправить</button>
          <button className='Btn-Back'>Вернуться на предыдущую страницу</button>
        </div>
      </div>
    </div>
  </div>
);
