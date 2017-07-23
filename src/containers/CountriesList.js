import {connect} from 'react-redux';
import React from 'react';
import CountriesList from '../components/CountriesList';
import {bindActionCreators} from 'redux'
import {fetchCountries} from '../modules/countries';

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({fetchCountries}, dispatch)
);

const mapStateToProps = (state) => ({
  countries: state.countries
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);
