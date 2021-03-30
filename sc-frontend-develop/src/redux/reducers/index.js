import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import catalog from './catalog'


export default combineReducers({ auth, profile, catalog });
