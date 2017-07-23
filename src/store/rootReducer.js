import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import countries from '../modules/countries';

export default combineReducers({
    routing: routerReducer,
    countries
});
