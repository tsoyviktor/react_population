import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import './Ranking.css';

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

  scrollToInfo = () => {
    const node = ReactDOM.findDOMNode(this.info);
    if (node) {
      node.scrollIntoView({behavior: 'smooth'});
    }
  };

  componentDidUpdate() {
    this.scrollToInfo();
  }

  clear() {
    this.props.clear();
  }

  getRanking() {
    if (!this.props.ranking.rank) {
      return '';
    }
    return (
      <div className="row info" ref={(info) => this.info = info}>
        <div>
          <p>DOB: {this.props.ranking.dob}</p>
          <p>Your Rank in the world</p>
        </div>

        <div>
          <p>Gender: {this.props.ranking.sex}</p>
          <p>You are ranked: {this.props.ranking.rank}</p>
        </div>
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

  render() {
    return (
      <div className="Ranking">
        <h3> Check Your Ranking</h3>
        <h5> Enter Your information to check where you rank</h5>
        <div>
          <div className="controls row">
            <input type="date" ref={(input) => this.inputs.date = input} placeholder="Date of Birth"/>

            <select ref={(select) => this.inputs.sex = select}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {this.getActionButton()}
          </div>
          <div className="list">
            {this.getRanking()}
            <p style={{color: 'red', fontSize: '.7em'}}>
              {this.props.ranking.error}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
