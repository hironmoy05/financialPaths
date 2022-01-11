import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import forgotReducer from './forgot';
import coinListReducer from './coinList';
import verifyEmailReducer from './verifyEmailApi';

export default combineReducers({
    bugs: bugsReducer,
    forgot: forgotReducer,
    coinsList: coinListReducer,
    verifyEmail: verifyEmailReducer
});