import { combineReducers } from "redux";
import user from './user';
import exhibitions from './exhibitions';

const rootReducer = combineReducers({user, exhibitions});

export default rootReducer;