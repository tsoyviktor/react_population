import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PopulationSubHeader extends Component {

  static propTypes = {
    world: PropTypes.shape({
      population: PropTypes.number,
    }),
    USA: PropTypes.shape({
      population: PropTypes.number,
    }),
    fetchCountryPopulation: PropTypes.func,
  };

  componentDidMount () {
    this.props.fetchCountryPopulation();
  }

  getPopulationTile (title, location = {}) {
    const population = location.population || '';
    return (
      <div key={title}>
        <h2>{title}</h2>
        <h4>As of today</h4>
        <h3>{population}</h3>
      </div>
    );
  }

  render () {
    return (
      <div>
        {this.getPopulationTile('World Population', this.props.world)}
        {this.getPopulationTile('USA Population', this.props.USA)}
        <hr/>
        <hr/>
      </div>
    );
  }
}
