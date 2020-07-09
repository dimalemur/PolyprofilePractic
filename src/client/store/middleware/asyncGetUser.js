import { setUser } from '../reducers/mainPageReducer';
import { setUserData } from '../reducers/profilePageReducer';
import { mainPageUser, polyProfileUserData } from '../../../../preview/moks';

export const asyncGetUser = (token) => (dispatch) => {
  if (token !== null && token !== 'null') {
    window.localStorage.setItem('polyUser', token); // записываем токен в localStorage
    dispatch(setUser(mainPageUser));
    console.log(mainPageUser);
  }
};

export const asyncAuth = (login, password) => (dispatch) => {
  dispatch(asyncGetUser('1a1a1a1a')); // диспатчем asyncGetUser
};

// получаем данные о пользователе и статуд доступа к странице
export const asyncGetUserData = (token, name) => (dispatch) => {
  dispatch(setUserData(polyProfileUserData));
};
