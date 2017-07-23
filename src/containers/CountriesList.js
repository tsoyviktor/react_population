import {connect} from 'react-redux';
import React from 'react';
import CountriesList from '../components/CountriesList';
import {bindActionCreators} from 'redux'
import {fetchCountries} from '../modules/countriesModule';
import { fetchExtendedPopulationAction } from '../modules/populationModule';


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCountries,
    fetchPopulation: fetchExtendedPopulationAction,
  }, dispatch)
};

const mapStateToProps = (state) => ({
  countries: state.countries,
  population: state.population,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);
