import React, {Component} from 'react';
import CountryCard from './CountryCard';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'

export default class CountriesList extends Component {

  constructor() {
    super();
    this.fetchCountries = this.fetchCountries.bind(this);
  }

  fetchCountries() {
    this.props.fetchCountries();
  }

  static propTypes = {
    countries: PropTypes.array,
    numberOfCountries: PropTypes.number,
    totalPopulation: PropTypes.number,
    fetchPopulation: PropTypes.func.isRequired,
    population: PropTypes.object,
  };

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

  getTableHeader () {
    if (isEmpty(this.props.countries)) {
      return ''
    }
    return (
      <div>
        <p> Total Population of Countries: {this.props.totalPopulation}</p>
        <p> Number of Countries: {this.props.numberOfCountries}</p>
      </div>
    );
  }

  render() {
    return (
      <div style={{height: '400px', overflowY: 'scroll', backgroundColor: 'lightgrey'}}>
        <h3> Shortest Country Names </h3>
        <p> Population of countries with shortest names </p>
        {this.getFetchButton()}
        {this.getTableHeader()}
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
}