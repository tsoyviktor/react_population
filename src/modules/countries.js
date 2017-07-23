import axios from 'axios';
import { sortBy } from 'lodash'

export const FETCH_COUNTRIES_ACTION = 'FETCH_COUNTRIES';

export const fetchCountries = () => {
  const URL = 'http://api.population.io:80/1.0/countries';
  return (dispatch) => {
    axios.get(URL)
      .then(response => {
        dispatch({
          type: FETCH_COUNTRIES_ACTION,
          payload: response.data.countries
        })
      })
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_ACTION:
      return sortBy(action.payload, str => str.length);
    default:
      return state
  }
}