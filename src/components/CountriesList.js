import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash'
import PopulationSubHeader from '../containers/PopulationSubHeader';


export default class CountriesList extends Component {

  static propTypes = {
    countries: PropTypes.array,
    fetchCountries: PropTypes.func
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
      <ul>
        {this.props.countries.map((country) => <li key={country}>{country}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <PopulationSubHeader />
        <h3> Shortest Country Names </h3>
        <p> Population of countries with shortest names </p>
        {this.getFetchButton()}
        {this.listOfCountries()}
      </div>
    );
  }
}
