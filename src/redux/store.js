import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import firstReducer from './reducers/firstReducer';
import secondReducer from './reducers/secondReducer';


const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;