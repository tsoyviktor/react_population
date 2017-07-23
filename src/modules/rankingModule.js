import { fetchRanking } from '../services/populationAPIService';

export const GET_RANKING_SUCCESS_ACTION = 'GET_RANKING_SUCCESS';
export const GET_RANKING_FAILED_ACTION = 'GET_RANKING_FAILED';
export const CLEAR_RANK_ACTION = 'CLEAR_RANK';

/**
 *
 * @param birthDate
 * @param gender
 * @return {function(*)}
 */
export const getRankingAction = (birthDate, gender) => {
  return (dispatch) => {
    fetchRanking(birthDate, gender)
      .then(data => {
        dispatch({
          type: GET_RANKING_SUCCESS_ACTION,
          payload: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_RANKING_FAILED_ACTION,
          payload: error
        })
      })
  }
};

export const clear = () => {
  return {
    type: CLEAR_RANK_ACTION,
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RANKING_SUCCESS_ACTION:
      return {
        ...action.payload
      };
    case GET_RANKING_FAILED_ACTION:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_RANK_ACTION:
      return {};
    default:
      return state;
  }
}
