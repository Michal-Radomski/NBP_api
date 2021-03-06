import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import './App.scss';
import {getCurrencies} from './redux/actions';
import CurrencyList from './components/CurrencyList';
import FavouriteCurrencies from './components/FavouriteCurrencies';

const H1 = styled.h1`
  text-align: center;
  color: palevioletred;
  margin: 5px;
`;

class App extends React.Component<{getCurrencies: () => void}> {
  //* Moved to the reducers
  // getCurrencies = () => {
  //   fetch("https://api.nbp.pl/api/exchangerates/tables/A")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log({data});
  //       const currencies = data[0].rates;
  //       console.log({currencies});
  //     });
  // };

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <React.Fragment>
        <H1>
          List of{' '}
          <a href="https://api.nbp.pl/api/exchangerates/tables/A" target="_blank" rel="noreferrer">
            NBP
          </a>{' '}
          Currencies Rates
        </H1>
        <FavouriteCurrencies />
        <CurrencyList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: State) => ({currencies: state.currencies});

export default connect(mapStateToProps, {getCurrencies})(App);
