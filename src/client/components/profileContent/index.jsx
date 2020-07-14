import './profilecontent.pcss';
import React, { useEffect, useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { asyncGetUserData } from '../../store/middleware/asyncGetUser';
import { logOutProfile } from '../../store/reducers/profilePageReducer';
import { logOutGrades } from '../../store/reducers/gradesPageReducer';
import { logOutPage } from '../../store/reducers/mainPageReducer';
import avatarIcon from '../../../source/images/icons/ava.svg';

const Profilecontent = (props) => {
  const Regnav = props.Regnavbar;

  const history = useHistory();

  const token = window.localStorage.getItem('polyUser');

  const backHome = (event) => {
    history.push(`/${props.login}`);
    props.asyncGetUserData(token, props.login);
  };

  return (
    <div className='Profilecontent'>
      <Regnav />
      <div className='Profilecontent-Wrap'>
        <div className='Info Profilecontent-Info'>
          {!(props.isOwner) && (
            <button onClick={backHome}>
              Домой
            </button>
          )}
          <div className='Ava Info-Ava'>
            <img className='Ava-Img' src={avatarIcon} alt='' />
            <span className='Ava-Text'>{props.userData.name}</span>
          </div>

          {
            (props.userData.workInfo === undefined)
              ? (<div className='Infoblock Personinfo Info-Personinfo'>
                <p className='Infoblock-Title Personinfo-Title' >
                  Данные обучающегося
              </p>

                <div className='Personinfo-Content'>

                  <div className='Personinfo-Name'>
                    {
                      Object.values(props.userData).map((el) => (
                        (el !== null && !Array.isArray(el) && typeof el === 'object')
                          ? (<p key={el.key} className='Infoline' > <b>{el.key} </b> </p>)
                          : (<></>)
                      ))
                    }
                  </div>
                  <div className='Personinfo-Value'>
                    {
                      Object.values(props.userData).map((el) => (
                        (el !== null && !Array.isArray(el) && typeof el === 'object')
                          ? (<p key={el.values} className='Infoline' > {el.val} </p>)
                          : (<></>)
                      ))
                    }
                  </div>

                </div>
              </div>)
              : <></>
          }

          <div className='Infoblock Info-Contactinfo '>

            <p className='Infoblock-Title' >
              {
                (props.userData.workInfo === undefined)
                  ? 'Контактные данные'
                  : 'Данные о сотруднике'
              }

            </p>

            <div className='Personinfo-Content'>
              <div className='Personinfo-Name'>
                <p className='Infoline' > <b>Электронная почта : </b> </p>
                <p className='Infoline' > <b>Номер телефона : </b> </p>
              </div>

              <div className='Personinfo-Value'>
                <p className='Infoline' > {props.userData.email} </p>
                <p className='Infoline' > {props.userData.tel} </p>
              </div>
            </div>

          </div>

          <div className='Infoblock Info-Contactinfo '>

            <p className='Infoblock-Title' >
              {
                (props.userData.workInfo === undefined)
                  ? 'Приказы'
                  : 'Сведения о трудоустройстве'
              }

            </p>
            <div className='Infoblock-Orders'>
              {
                (props.userData.orders !== undefined)
                  ? (
                    props.userData.orders.map((item, i) => (
                      <p className='Infoline' key={i} >
                        <a href={`http://www.${item.url}`} > {`${i + 1}. ${item.name}`} </a>
                      </p>
                    ))
                  ) : (
                    props.userData.workInfo.map((item, i) => (
                      <p className='Infoline' key={i} >
                        <b>{item.name}</b> {item.additional}
                      </p>
                    ))
                  )
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    state,
    userData: state.profilePage.userData,
    login: state.mainPage.user.login,
    isOwner: state.profilePage.isOwner,
  }),
  (dispatch) => ({
    logOut: () => {
      dispatch(logOutProfile());
      dispatch(logOutPage());
      dispatch(logOutGrades());
    },
    asyncGetUserData: (token, name) => {
      dispatch(asyncGetUserData(token, name));
    },
  }),
)(Profilecontent);
