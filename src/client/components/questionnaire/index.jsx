import React from 'react';
import './questionnaire.pcss';
import Regnavbar from '../regnavbar';

/* позже заменить на ссылку настоящей анкеты */

export const Questionnaire = (props) => (
  <div className='Questionnaire'>
    <Regnavbar />
    <div className='Questionnaire-Content'>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSdvxEMDtBbs1DI3hdyIo6qSrKUKXqre5kdb7aV6m67sLAYtYQ/viewform?embedded=true'
        width='100%'
        height='1900'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
      >
        Загрузка
      </iframe>
    </div>

  </div>
);
