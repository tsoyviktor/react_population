import { fetchTotalPopulationToday,
  fetchGenderPopulation
} from '../services/populationService';

const POPULATION_ACTION = 'COUNTRY_DETAILS';
const GENDER_POPULATION_ACTION = 'GENDER_POPULATION';

/**
 *
 * @param countries
 * @return {function(*)}
 */
export const fetchTotalPopulationAction = (countries) => {
  const promises = countries.map(country => {
    return fetchTotalPopulationToday(country)
  });

  return (dispatch) => {
    Promise.all(promises)
      .then(data => {
        dispatch({
          type: POPULATION_ACTION,
          payload: data.reduce((acc, result) => {
            acc[result.country] = result.data;
            return acc;
          }, {})
        })
      })
  }
};

/**
 *
 * @param country
 * @return {function(*)}
 */
export const fetchExtendedPopulationAction = (country) => {
  return (dispatch) => {
    fetchGenderPopulation(country)
      .then(data => {
        dispatch({
          type: GENDER_POPULATION_ACTION,
          payload: {
            [country]: data
          }
        })
      })
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case POPULATION_ACTION:
    case GENDER_POPULATION_ACTION:
      return {
        ...state, ...action.payload
      };
    default:
      return state;
  }
}
