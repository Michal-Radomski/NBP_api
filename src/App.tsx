import React from "react";
import "./App.scss";
class App extends React.Component<{}, {}> {
  getCurrencies = () => {
    fetch("https://api.nbp.pl/api/exchangerates/tables/A")
      .then((response) => response.json())
      .then((data) => {
        // console.log({data});
        const currencies = data[0].rates;
        console.log({currencies});
      });
  };

  componentDidMount() {
    this.getCurrencies();
  }

  render() {
    return <React.Fragment>NBP API App</React.Fragment>;
  }
}

export default App;
