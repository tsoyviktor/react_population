import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CountryCard extends Component {

  constructor () {
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
      <div style={{border: '1px solid grey', cursor: 'pointer'}}
           onClick={this.getInfo}>
        <div>
          <p>{this.props.country}</p>
          <p>Females: {this.props.females}</p>
        </div>
        <div>
          <p>Total: {this.props.total}</p>
          <p>Males: {this.props.males}</p>
        </div>
      </div>
    );
  }
}
