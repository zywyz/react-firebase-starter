import firebase from 'firebase';
import * as actionTypes from './actionTypes';

export function registerWithEmail(email, password) {
  return dispatch => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        // console.log('user => ', user);
        dispatch(afterLoginActions(user.emailVerified));
        user.sendEmailVerification().then(function() {
          // Email sent.
        }).catch(function(error) {
          // An error happened.
        });
      });
      // .catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorCode, errorMessage);
      //   // ...
      // });
  }
}

export function loginWithEmail(email, password) {
  console.log('loginWithEmail', email, password);
  return dispatch => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export function logout() {
  return dispatch => {
    firebase.auth().signOut().then(function() {
      dispatch(afterLogoutActions());
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      console.log('logout failed', error);
    });
  }
}

export function sendPasswordResetEmail(email) {
  return dispatch => {
    return firebase.auth().sendPasswordResetEmail(email)
      .then(() => { console.log('successfully sent'); });
  }
}

export const afterLoginActions = (isVerified) => {
  return dispatch => {
    dispatch(setUserIsLogged(isVerified));
    dispatch(setIsLoginStatusFetched());
    if (isVerified) {
      dispatch(setIsVerified());
    } else {
      dispatch(resetIsVerified());
    }
  }
}

export const setUserIsLogged = (isVerified) => {
  return ({
    type: actionTypes.SET_USER_IS_LOGGED,
  });
}

export const afterLogoutActions = () => {
  return dispatch => {
    dispatch(resetUserIsLogged());
    dispatch(setIsLoginStatusFetched());
    dispatch(resetIsVerified());
  }
}

export const resetUserIsLogged = () => {
  return ({
    type: actionTypes.RESET_USER_IS_LOGGED,
  });
}

const setIsLoginStatusFetched = () => {
  return ({
    type: actionTypes.SET_IS_LOGIN_STATUS_FETCHED,
  });
}

const setIsVerified = () => {
  return ({
    type: actionTypes.SET_IS_VERIFIED,
  });
}

const resetIsVerified = () => {
  return ({
    type: actionTypes.RESET_IS_VERIFIED,
  });
}