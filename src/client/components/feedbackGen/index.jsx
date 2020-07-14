import React from 'react';
import './feedbackgen.pcss';
import Regnavbar from '../regnavbar';
import { FeedbackNotice } from '../feedbackNotice';
import { FeedbackForm } from '../feedbackForm';

export const FeedbackGen = (props) => (
  <div className='FeedbackGen'>
    <Regnavbar />
    <div className='FeedbackGen-Inner'>
      <div className='FeedbackGen-Title Title'>
        Форма обратной связи
      </div>
      <FeedbackNotice  />
    </div>
  </div>
);
