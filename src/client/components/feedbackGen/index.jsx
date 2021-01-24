import React, { useState } from 'react';
import './feedbackgen.pcss';
import Regnavbar from '../regnavbar';
import { FeedbackNotice } from '../feedbackNotice';
import { FeedbackForm } from '../feedbackForm';

export const FeedbackGen = (props) => {
  const [feedMod, setFeedMod] = useState(1)
  return (
    <div className='FeedbackGen'>
      <Regnavbar />
      <div className='FeedbackGen-Inner'>
        <div className='FeedbackGen-Title Title'>
          Форма обратной связи
      </div>
        {
          (feedMod === 1)
            ? <FeedbackNotice feedMod={feedMod} setFeedMod={setFeedMod} />
            : <FeedbackForm feedMod={feedMod} setFeedMod={setFeedMod} />
        }


      </div>
    </div>
  );
};
