import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';
import {ListItem} from 'material-ui/List';

export default class CountryCard extends Component {

  constructor() {
    super();
    this.getInfo = this.getInfo.bind(this);
  }

  static propTypes = {
    country: PropTypes.string,
    males: PropTypes.number,
    females: PropTypes.number,
    total: PropTypes.number,
    fetchPopulation: PropTypes.func,
  };

  static defaultProps = {
    country: PropTypes.string,
  };

  getInfo() {
    if (!this.props.total) {
      this.props.fetchPopulation(this.props.country);
    }
  }

  render() {
    return (
      <ListItem style={{fontSize: '.98em'}} onClick={this.getInfo}>
        <div style={{cursor: this.props.total ? '' : 'pointer'}} className="row CountryCard">

          <div>
            <p className="CountryCard__country">{this.props.country}</p>
            <p className={this.props.total ? 'visible' : 'hidden'}>Male Population: {this.props.males}</p>
          </div>
          <div>
            <p className={this.props.total ? 'visible' : 'hidden'}>Total Population: {this.props.total}</p>
            <p className={this.props.total ? 'visible' : 'hidden'}>Female Population: {this.props.females}</p>
          </div>
        </div>
      </ListItem>
    );
  }
}
