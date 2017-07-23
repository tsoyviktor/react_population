import { fetchTotalPopulationToday } from '../services/populationService';
const COUNTRY_POPULATION_ACTION = 'COUNTRY_DETAILS';


/**
 *
 * @param countries
 * @return {function(*)}
 */
export const fetchPopulationAction = (countries) => {
  const promises = countries.map(country => {
    return fetchTotalPopulationToday(country)
  });

  return (dispatch) => {
    Promise.all(promises)
      .then(data => {
        dispatch({
          type: COUNTRY_POPULATION_ACTION,
          payload: data.reduce((acc, result) => {
            acc[result.country] = result.data;
            return acc;
          }, {})
        })
      })
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_POPULATION_ACTION:
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  }
}
