import { combineReducers } from 'redux';
import users from './users';


const rootReducer = combineReducers({
    user: users
});



export default rootReducer;