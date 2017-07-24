import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SubHeader.css';
import Paper from 'material-ui/Paper';

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
      <div key={title} className="tile">
        <Paper style={{padding: '30px', marginTop: '30px'}}>
          <h4>{title}</h4>
          <h5 className="highlight">As of today</h5>
          <h4 className="Population highlight">{population}</h4>
        </Paper>
      </div>
    );
  }

  render () {
    return (
      <div className="row SubHeader">
        {this.getPopulationTile('World Population', this.props.world)}
        {this.getPopulationTile('USA Population', this.props.USA)}
      </div>
    );
  }
}
