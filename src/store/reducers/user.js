import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  isLoginStatusFetched: false,
  isLogged: false,
  isVerified: false,
  email: '',
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_IS_LOGGED:
      return Object.assign(
        {},
        state,
        { isLogged: true },
      );
    case actionTypes.RESET_USER_IS_LOGGED:
      return Object.assign(
        {},
        state,
        { isLogged: false },
      );
    case actionTypes.SET_IS_LOGIN_STATUS_FETCHED:
      return Object.assign(
        {},
        state,
        { isLoginStatusFetched: true }
      );
    case actionTypes.RESET_IS_LOGIN_STATUS_FETCHED:
      return Object.assign(
        {},
        state,
        { isLoginStatusFetched: false }
      );
    case actionTypes.SET_IS_VERIFIED:
      return Object.assign(
        {},
        state,
        { isVerified: true }
      );
    case actionTypes.RESET_IS_VERIFIED:
      return Object.assign(
        {},
        state,
        { isVerified: false }
      );
    default:
      return state;
  }
};

export default user;
