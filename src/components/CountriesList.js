import React, {Component} from 'react';
import CountryCard from './CountryCard';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

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
        <RaisedButton primary={true} label="Fetch" onClick={this.fetchCountries} />
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
        <div className="CountriesList__list list">
          <List>
            {this.props.countries.map((country) => {
              return (
                <div key={country}>
                  <CountryCard country={country}
                               fetchPopulation={this.props.fetchPopulation}
                               {...this.props.population[country]} />
                  <Divider />
                </div>
              )
            })}
          </List>
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