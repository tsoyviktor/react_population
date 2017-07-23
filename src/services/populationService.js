import axios from 'axios';
import moment from 'moment';

const API_ROOT = 'http://api.population.io:80/1.0';
const today = () => moment().format('YYYY-MM-DD');

export class RESPONSE {
  static TOTAL_POPULATION = 'total_population';
  static POPULATION = 'population'
}

/**
 * Fetches population info for the given country
 * @param {String} country
 * @return {Promise}
 */
export const fetchTotalPopulationToday = (country) => {
  const URL = `${API_ROOT}/population/${encodeURI(country)}/${today()}`;

  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then(response => {
        resolve({
          country,
          data: response.data[RESPONSE.TOTAL_POPULATION]
        })
      })
      .catch(e => reject(e))
  })
};
