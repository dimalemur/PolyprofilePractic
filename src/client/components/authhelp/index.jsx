import React from 'react';
import './authhelp.pcss';
import { NavLink } from 'react-router-dom';

const Firsttimeauth = (props) => {
  switch (props.mode) {
    case 1:
      return (
        <div className="Authhelp-Firstmode">
          <div className='Authhelp-Title'>
            Студентам
          </div>
          <div className='Authhelp-Block'>
            Для первого входа в личный кабинет необходимо получить <b>пароль (код студента)</b> в своем <br />
            <span className='Block-Text_blue'>Центре по работе со студентами.</span>
          </div>
          <div className='Authhelp-Block'>
            В качестве <b>логина</b> используйте Вашу <b>фамилию</b> (с заглавной первой буквой, остальные строчные, например Иванов).
            После успешной авторизации Вы можете поменять логин и пароль в личном кабинете (раздел «Настройки»).
          </div>
          <div className='Authhelp-Block'>
            <span className='Block-Text_red'>Обратите внимание:  </span>
            буквы в пароле (в виде 0М-... или 0М-0М-... ) должны быть набраны в русской раскладке заглавными. Перед русской
            буквой «М» стоит цифра «ноль» - 0 (но не буква «О»). Обязательно указывайте дефисы (-) в пароле.
          </div>

          <div className='Authhelp-Title'>
            Сотрудникам
          </div>
          <div className='Authhelp-Block'>
            Если Вы не получали пароль ранее, обратитесь за единой учетной записью в
            отдел технической поддержки (ул. Б. Семеновская, 38, ауд А-418).
          </div>
        </div>
      )

    case 2:
      return (
        <div className="Authhelp-Secondmode">
          <div className='Authhelp-Block'>
            Восстановление доступа к личному кабинету возможно в том случае,
            если в аккаунте был указан адрес электронной почты.
          </div>
          <div className="Authhelp-Form">
            <label htmlFor='inpf'>E-mail, указанный в личном кабинете</label>
            <input type='text' id='inpf' />
            <div className="Authhelp-Button">
              Восстановить доступ
            </div>
          </div>
          <div className='Authhelp-Block'>
            Если Вы не указывали  адрес электронной почты и не меняли пароль - обратитесь в свой
            <span className='Block-Text_blue'> Центр по работе со студентами </span>как для получения первичного пароля.
          </div>
          <div className='Authhelp-Block'>
            <span className='Block-Text_red'>Данные для входа в личный кабинет абитуриента, а также в систему
            дистанционного обучения здесь недействительны.  </span>
          </div>
        </div>
      )
    default:
      '';
  }
}

export const Authhelp = (props) => {
  const [activeMode, setActiveMode] = React.useState(1);
  return (
    <div className='Authorization-Wrap'>
      <div className='Authhelp Authorization'>
        <div className="Authhelp-Content">
          <Firsttimeauth mode={activeMode} />
        </div>
        <div className='Authhelp-Navigation'>
          <div className={`Navigation-Item Navigation-Item_active_${(activeMode === 1)}`} onClick={() => { setActiveMode(1) }}>
            Я захожу в аккаунт первый раз
          </div>
          <div className={`Navigation-Item Navigation-Item_active_${(activeMode === 2)}`} onClick={() => { setActiveMode(2) }}>
            Я не помню данные для входа
          </div>
          <NavLink to='/'>
            <div className='Navigation-Item Navigation-Item_link'>
              Вернуться к авторизации
                </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
