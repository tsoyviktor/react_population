import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

export default class Ranking extends Component {

  state = {
    emptyInput: false,
  };

  inputs = {
    date: null,
    sex: null,
  };

  static propTypes = {
    fetchRanking: PropTypes.func.isRequired,
    ranking: PropTypes.shape({
      dob: PropTypes.string,
      sex: PropTypes.string,
      rank: PropTypes.number,
      error: PropTypes.string,
    }),
  };

  static defaultProps = {
    ranking: {}
  };

  constructor() {
    super();
    this.fetchRanking = this.fetchRanking.bind(this);
    this.clear = this.clear.bind(this);
  }

  fetchRanking() {
    let {date, sex} = this.inputs;
    this.props.fetchRanking(date.value, sex.value);
  }

  clear() {
    this.props.clear();
  }

  getRanking() {
    if (!this.props.ranking.rank) {
      return '';
    }
    return (
      <div style={{border: '1px solid black'}}>
        <h4>Your Rank in the world</h4>
        <span>DOB: {this.props.ranking.dob}</span>
        <span>You are ranked: {this.props.ranking.rank}</span>
        <span>Gender: {this.props.ranking.sex}</span>
      </div>
    );
  }

  getActionButton() {
    const button = !this.props.ranking.rank ?
      <button onClick={this.fetchRanking}>Fetch</button>
    : <button onClick={this.clear} style={{background: 'red'}}>Clear</button>;
    return (
      <div>{button}</div>
    );
  }

  render () {
    return (
      <div>
        <h3> Check Your Ranking</h3>
        <h5> Enter Your information to check where you rank</h5>
        <div>

          <input type="date" ref={(input) => this.inputs.date = input } placeholder="Date of Birth"/>

          <select ref={(select) => this.inputs.sex = select }>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {this.getActionButton()}
          {this.getRanking()}

          <p style={{color: 'red', fontSize: '.7em'}}>
            {this.props.ranking.error}
          </p>

        </div>
      </div>
    );
  }
}
