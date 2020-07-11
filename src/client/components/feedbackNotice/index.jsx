import React from 'react';
import './feedbacknotice.pcss';
import Regnavbar from '../regnavbar';

export const FeedbackNotice = (props) => (
  <div className='FeedbackNotice'>
    <Regnavbar />
    <div className='FeedbackNotice-Inner'>
      <div className='FeedbackNotice-Title Title'>
        Форма обратной связи
      </div>
      <div className='FeedbackNotice-Content'>
        <div className='Notice-Title'>
          <span>Прежде, чем написать сообщение, убедитесь в том, что указанные ниже случаи НЕ относятся к вашей проблеме:</span>
        </div>
        <div className='Notice-Text'>
          <p>1. Если у вас <span className='Text-Attention'>проблемы с системой LMS</span> (не можете войти, не приходит ответ и т.п), а также любые вопросы по дистанционному обучению - пишите на почту: <span className='Text-Attention'>lms@mospolytech.ru.</span></p>
          <p>2. Если вы - <span className='Text-Attention'>АБИТУРИЕНТ</span>, то вам по адресу: <span className='Text-Attention'>lk.mospolytech.ru</span>. Там сначала необходимо получить пароль, используя номер личного дела или адрес электронной почты, который был указан при подаче заявления.</p>
          <p>3. <span className='Text-Attention'>Не можете войти по выданному паролю</span>: убедитесь, что в пароле буква «М» русская и перед ней стоит ноль (0), а не буква О. Дефисы в пароле также должны быть. Вы также можете восстановить доступ в личный кабинет самостоятельно, если в своем аккаунте указывали адрес электронной почты. Если не удается восстановить пароль самостоятельно - обращайтесь в любое отделение ЦРС.</p>
          <p><span className='Text-Attention'>Сотрудники университета</span> получают доступ к личному кабинету через единую учетную запись, которую получают в отделе технической поддержки (БС ауд. А-418, тел. 1111 или почта help@mospolytech.ru).</p>
          <p>4. <span className='Text-Attention'>Неточности в своих персональных данных</span> (неправильные или отсутствующие ФИО, пол и т.п.), а также успеваемости: обращайтесь в свое отделение ЦРС лично или через произвольный запрос в разделе «Справки, заявления».</p>
          <p>5. <span className='Text-Attention'>Неправильные суммы в разделе</span> «Сведения об оплатах», отсутствует договор: обратитесь в договорной отдел.</p>
        </div>
        <div className='Notice-Сonfirm'>
          <span>Да, я в курсе этого. Мой вопрос касается другой темы</span>
        </div>
      </div>
    </div>
  </div>
);
