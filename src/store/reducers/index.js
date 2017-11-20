import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import user from './user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  user,
  form: reduxFormReducer,
});

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
