import { setUserGrades, setGradesLoader } from '../reducers/gradesPageReducer';
import { grades } from '../../../../preview/moks';

export const asyncGetGrades = (token, semester) => (dispatch) => {
  dispatch(setGradesLoader());

  const res = [];
  if (grades[semester - 1]) {
    res.push(grades[semester - 1]);
  }

  const data = (semester === 0) ? grades : res;

  dispatch(setUserGrades(data));
  dispatch(setGradesLoader());
};
