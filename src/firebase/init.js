import firebase from 'firebase';
import config from './config';
import store from '../store/reducers/index';

import * as actionCreators from '../store/actions/index';

export default function initFirebase() {
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { // User is signed in.
      store.dispatch(actionCreators.afterLoginActions(user.emailVerified));
    } else { // User is signed out.
      store.dispatch(actionCreators.afterLogoutActions());
    }
  });
}
