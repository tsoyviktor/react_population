import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import countries from '../modules/countriesModule';
import population from '../modules/populationModule';

export default combineReducers({
    routing: routerReducer,
    countries,
    population,
});
