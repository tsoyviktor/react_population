import {connect} from 'react-redux';
import React from 'react';
import CountriesList from '../components/PageBody';
import {bindActionCreators} from 'redux'
import {fetchCountries} from '../modules/countriesModule';
import { fetchExtendedPopulationAction } from '../modules/populationModule';
import { COUNTRY } from '../constants/countries';
import { keys, reduce } from 'lodash';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCountries,
    fetchPopulation: fetchExtendedPopulationAction,
  }, dispatch)
};

const getTotalPopulation = (state) => {
  const countries = keys(state.population)
    .filter(country => COUNTRY.DEFAULT.indexOf(country) === -1);

  return reduce(countries,
    (acc, country) => {
      return acc + state.population[country].total;
    }, 0)
};

const mapStateToProps = (state) => ({
  countries: state.countries,
  population: state.population,
  numberOfCountries: keys(state.population).length >= 2 ? keys(state.population).length - 2 : 0,
  totalPopulation: getTotalPopulation(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);
