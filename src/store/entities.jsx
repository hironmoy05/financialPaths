import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import forgotReducer from './forgot';

export default combineReducers({
    bugs: bugsReducer,
    forgot: forgotReducer,
});