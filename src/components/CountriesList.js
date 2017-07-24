import React, {Component} from 'react';
import CountryCard from './CountryCard';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'
import './CountriesList.css';

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
    if (!this.hasInfo()) {
      return (
        <button onClick={this.fetchCountries}>
          Fetch
        </button>
      )
    }
    return '';
  }

  hasInfo() {
    return !isEmpty(this.props.countries);
  }

  getTableHeader() {
    if (isEmpty(this.props.countries)) {
      return ''
    }
    return (
      <div className="row">
        <p> Total Population of Countries: {this.props.totalPopulation}</p>
        <p> Number of Countries: {this.props.numberOfCountries}</p>
      </div>
    );
  }

  getCountryTiles() {
    if (this.hasInfo()) {
      return (
        <div style={{maxHeight: '400px', overflowY: 'scroll'}} className="CountriesList__list list">
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
    return '';
  }

  render() {
    return (
      <div className="CountriesList">
        <h3> Shortest Country Names </h3>
        <p> Population of countries with shortest names </p>
        {this.getFetchButton()}
        {this.getTableHeader()}
        {this.getCountryTiles()}
      </div>
    )
  }
}