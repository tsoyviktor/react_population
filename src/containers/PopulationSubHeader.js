import { connect } from 'react-redux';
import PopulationSubHeader from '../components/PopulationSubHeader';
import { COUNTRY } from '../constants/countries';
import {bindActionCreators} from 'redux';
import { fetchTotalPopulationAction } from '../modules/populationModule';

const mapStateToProps = (state) => {
  return {
    world: state.population[COUNTRY.WORLD],
    USA: state.population[COUNTRY.USA]
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCountryPopulation: fetchTotalPopulationAction.bind(null, [COUNTRY.WORLD, COUNTRY.USA]),
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopulationSubHeader)
