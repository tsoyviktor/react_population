import {connect} from 'react-redux';
import Ranking from '../components/Ranking';
import {bindActionCreators} from 'redux';
import {getRankingAction, clear} from '../modules/rankingModule';

const mapStateToProps = (state) => {
  return {
    ranking: state.ranking,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchRanking: getRankingAction,
    clear,
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ranking)
