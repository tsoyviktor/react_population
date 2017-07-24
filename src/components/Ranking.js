import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import './Ranking.css';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

export default class Ranking extends Component {

  inputs = {
    date: null,
    sex: null,
  };

  state = {
    sex: ''
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
    this.handleSexSelection = this.handleSexSelection.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  fetchRanking() {
    this.props.fetchRanking(this.state.date, this.state.sex);
  }

  scrollToInfo = () => {
    const node = ReactDOM.findDOMNode(this.info);
    if (node) {
      node.scrollIntoView(true);
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
          <p>Gender: {this.props.ranking.sex}</p>
        </div>

        <div>
          <p>Your Rank in the world</p>
          <p>You are ranked: {this.props.ranking.rank}</p>
        </div>
      </div>
    );
  }

  getActionButton() {
    const button = !this.props.ranking.rank ?
      <RaisedButton onClick={this.fetchRanking}>Fetch</RaisedButton>
      : <RaisedButton onClick={this.clear} secondary={true}>Clear</RaisedButton>;
    return (
      <div>{button}</div>
    );
  }

  handleSexSelection(event, index, sex) {
    this.setState({sex})
  }

  handleDateChange(event, date) {
    this.setState({date})
  }

  render() {
    return (
      <div className="Ranking">
        <h3> Check Your Ranking</h3>
        <h5> Enter Your information to check where you rank</h5>
        <div>
          <div className="controls row">
            <DatePicker
              onChange={this.handleDateChange}
              autoOk={true}
              hintText="Birthday" />

            <SelectField value={this.state.sex} onChange={this.handleSexSelection} floatingLabelText="Gender">
              <MenuItem value="male" primaryText="Male"/>
              <MenuItem value="female" primaryText="Female"/>
            </SelectField>

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
