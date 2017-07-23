import axios from 'axios';
import moment from 'moment';

const API_ROOT = 'http://api.population.io:80/1.0';
const today = () => moment().format('YYYY-MM-DD');
const currentYear = () => Number(moment().format('YYYY'));

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

/**
 *
 * @param country
 */
export const fetchGenderPopulation = (country) => {

  const URL = `${API_ROOT}/population/${currentYear()}/${encodeURI(country)}`;
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then(response => {
        const result = response.data.reduce((acc, item) => {
            acc.females += item.females;
            acc.males += item.males;
            acc.total += item.males + item.females;
            return acc;
          }, {
            females: 0,
            males: 0,
            total: 0,
          }
        );
        resolve(result);
      })
      .catch(e => reject(e))
  });
};
