import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'
import PopulationSubHeader from '../containers/PopulationSubHeader';
import CountryCard from './CountryCard';
import Ranking from '../containers/Ranking';

export default class PageBody extends Component {

  static propTypes = {
    countries: PropTypes.array,
    fetchCountries: PropTypes.func,
    fetchPopulation: PropTypes.func,
    population: PropTypes.object,
    numberOfCountries: PropTypes.number,
    totalPopulation: PropTypes.number,
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
      <div style={{height: '400px', overflowY: 'scroll', backgroundColor: 'lightgrey'}}>
        <h3> Shortest Country Names </h3>
        <p> Population of countries with shortest names </p>
        <p> Total Population of Countries: {this.props.totalPopulation}</p>
        <p> Number of Countries: {this.props.numberOfCountries}</p>
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
      <div style={{paddingBottom: '40px'}}>
        <PopulationSubHeader/>
        {this.getFetchButton()}
        {this.listOfCountries()}
        <Ranking />
      </div>
    );
  }
}
