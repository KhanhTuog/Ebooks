import { combineReducers } from 'redux';
import loginReducer from './Redux/reducers'


const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
