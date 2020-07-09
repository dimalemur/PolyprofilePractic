import { setUserVisits, setVisitsLoader } from '../reducers/sportPageReducer';
import { sportVisits } from '../../../../preview/moks';

export const asyncGetSportVisits = (token, semester) => (dispatch) => {
  dispatch(setVisitsLoader());
  const res = [];

  sportVisits.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.countNeed = element.count - element.visits.length;
  });

  if (sportVisits[semester - 1]) {
    res.push(sportVisits[semester - 1]);
  }

  const data = (semester === 0) ? sportVisits : res;

  dispatch(setUserVisits(data));
  dispatch(setVisitsLoader());
};
