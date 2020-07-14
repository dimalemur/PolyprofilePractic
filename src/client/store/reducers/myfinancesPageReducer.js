export const initialState = {
  payments: [],
};

const SET_PAYMENTS = 'SET_PAYMENTS';
const SET_ACTIVE_MOUNTH = 'SET_ACTIVE_MOUNTH';
const SET_ACTIVE_DAY = 'SET_ACTIVE_DAY';

export const myFinancesPageReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case SET_PAYMENTS:
      newState = { ...state };
      newState.payments = action.payments;
      return newState;

    case SET_ACTIVE_MOUNTH:
      newState = { ...state };

      newState.payments = newState.payments.map((el, i) => {
        if (action.year === el.year) {
          const newPayment = el.payment.map((element) => ((action.mounth === element.mounth) ? { ...element, isactive: true } : { ...element, isactive: false }));

          return { year: el.year, payment: newPayment };
        } else {
          const newPayment = el.payment.map((element) => ({ ...element, isactive: false }));

          return { year: el.year, payment: newPayment };
        }
      });
      return newState;

    case SET_ACTIVE_DAY:
      newState = { ...state };

      newState.payments = newState.payments.map((el, i) => {
        const newPayment = el.payment.map((element) => ((action.balance === element.balance) ? { ...element, isactive: true } : { ...element, isactive: false }));

        return { year: el.year, payment: newPayment };
      });

      return newState;

    default:
      return state;
  }
};

export const setPayments = (payments) => ({ type: SET_PAYMENTS, payments });
export const setActiveMounth = (year, mounth) => ({ type: SET_ACTIVE_MOUNTH, year, mounth });
export const setActiveDay = (balance) => ({ type: SET_ACTIVE_DAY, balance });
