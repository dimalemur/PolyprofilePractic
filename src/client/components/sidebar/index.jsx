import React from 'react';
import './sidebar.pcss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutProfile } from '../../store/reducers/profilePageReducer';
import { logOutGrades } from '../../store/reducers/gradesPageReducer';
import { logOutPage } from '../../store/reducers/mainPageReducer';
import computerIcon from '../../../source/images/icons/computer.svg';
import avatarIcon from '../../../source/images/icons/ava.svg';
import settingsIcon from '../../../source/images/icons/settings.svg';
import menuIcon from '../../../source/images/icons/menu.svg';
import logOutP from '../../../source/images/icons/logOut.svg';

const Sdbar = (props) => {
  const logOut = (event) => {
    props.logOut();
  };
  return (
    <div className={'Sidebar'} >
      <div className='Topicons Sidebar-Topicons'>
        <NavLink to={`/${props.user}`} className='Topicons-Profileicon' >
          <img src={avatarIcon} alt='Профиль' />
        </NavLink>

        <button className='Menuicon Topicons-Menuicon' onClick={props.activateMenu} >
          <img src={menuIcon} alt='Меню' />
        </button>
      </div>

      <div className='Bottomicons Sidebar-Bottomicons'>
        <button className='SignoutButton' onClick={logOut}>
          <img src={logOutP} alt='Выход' />
        </button>

        <NavLink to={`/${props.user}/settings`} className='Menuicon Bottomicons-Settingicon ' >
          <img src={settingsIcon} alt='Настройки' />
        </NavLink>

        <a href='https://new.mospolytech.ru/' target='_blank' className='Menuicon Bottomicons-Desktopicon ' >
          <img src={computerIcon} alt='Компьютер' />
        </a>
      </div>
    </div>
  );
}

export const Sidebar = connect(
  (state) => ({}),
  (dispatch) => ({
    logOut: () => {
      dispatch(logOutProfile());
      dispatch(logOutPage());
      dispatch(logOutGrades());
    },
  }),
)(Sdbar);
