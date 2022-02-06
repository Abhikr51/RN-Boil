//Packages
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
//Reducers
import AuthReducer from './reducers/AuthReducer';




const rootReducer = combineReducers({
  auth : AuthReducer,

});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));




export default store;