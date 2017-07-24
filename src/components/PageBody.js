import React, {Component} from 'react';
import PopulationSubHeader from '../containers/PopulationSubHeader';
import CountriesList from '../containers/CountriesList';
import Ranking from '../containers/Ranking';

export default class PageBody extends Component {

  render() {
    return (
      <div>
        <PopulationSubHeader />
        <CountriesList />
        <Ranking />
      </div>
    );
  }
}
