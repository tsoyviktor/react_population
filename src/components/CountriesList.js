import React, {Component} from 'react';
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

  fetchButton() {
    if (isEmpty(this.props.countries)) {
      return (
        <button onClick={this.fetchCountries}>
          Fetch
        </button>
      )
    }
    return '';
  }

  render() {
    return (
      <div>
        <h3> This is CountriesList </h3>
        {this.fetchButton()}
        <ul>
          {this.props.countries.map((country) => <li>{country}</li>)}
        </ul>
      </div>
    );
  }
}

CountriesList.propTypes = {
  countries: PropTypes.array,
  fetchCountries: PropTypes.func
};

CountriesList.defaultProps = {
  countries: []
};
