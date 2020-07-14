import { setUser } from '../reducers/mainPageReducer';
import { setUserData } from '../reducers/profilePageReducer';
import { mainPageUser, mainPageTeacher, polyProfileTeacherData, polyProfileUserData } from '../../../../preview/moks';

export const asyncGetUser = (token) => (dispatch) => {
  if (token !== null && token !== 'null') {
    window.localStorage.setItem('polyUser', token); // записываем токен в localStorage
    if (token === 'teacher') {
      dispatch(setUser(mainPageTeacher));
    } else {
      dispatch(setUser(mainPageUser));
    }
  }
};

export const asyncAuth = (login, password) => (dispatch) => {
  if (login === 'ivanov') {
    dispatch(asyncGetUser('teacher'));
  } else {
    dispatch(asyncGetUser('student'));
  }
};

// получаем данные о пользователе и статуд доступа к странице
export const asyncGetUserData = (token, name) => (dispatch) => {
  if (token === 'teacher') {
    dispatch(setUserData(polyProfileTeacherData));
  } else {
    dispatch(setUserData(polyProfileUserData));
  }
};
