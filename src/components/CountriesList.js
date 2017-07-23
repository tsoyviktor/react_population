import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'
import PopulationSubHeader from '../containers/PopulationSubHeader';
import CountryCard from './CountryCard';


export default class CountriesList extends Component {

  static propTypes = {
    countries: PropTypes.array,
    fetchCountries: PropTypes.func,
    fetchPopulation: PropTypes.func,
    population: PropTypes.object,
  };

  static defaultProps = {
    countries: []
  };

  constructor() {
    super();
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries() {
    this.props.fetchCountries();
  }

  getFetchButton() {
    if (isEmpty(this.props.countries)) {
      return (
        <button onClick={this.fetchCountries}>
          Fetch
        </button>
      )
    }
    return '';
  }

  listOfCountries() {
    return (
      <div>
        {this.props.countries.map((country) => {
          return (
            <CountryCard key={country}
                         country={country}
                         fetchPopulation={this.props.fetchPopulation}
                         {...this.props.population[country]} />
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <PopulationSubHeader/>
        <h3> Shortest Country Names </h3>
        <p> Population of countries with shortest names </p>
        {this.getFetchButton()}
        {this.listOfCountries()}
      </div>
    );
  }
}
