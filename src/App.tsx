import React from "react";
import {connect} from "react-redux";

import {getCurrencies} from "./redux/actions";

class App extends React.Component<any, {}> {
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
    return <React.Fragment>NBP API App</React.Fragment>;
  }
}

const mapStateToProps = (state: State) => ({currencies: state.currencies});

export default connect(mapStateToProps, {getCurrencies})(App);
