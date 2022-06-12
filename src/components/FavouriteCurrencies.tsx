import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";

import {H2} from "./CurrencyList";

const Container = styled.div`
  width: 90%;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: whitesmoke;
`;

const FavouriteCurrencies = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;
  // console.log("currenciesList.currencies:", currencies);

  const favouriteCurrencies =
    currencies !== undefined ? currencies.filter((currency: Currency) => currency.isFavourite === true) : [];
  console.log(favouriteCurrencies);

  return (
    <React.Fragment>
      <H2>List of Favourite Currencies</H2>
      <Container />
    </React.Fragment>
  );
};

export default FavouriteCurrencies;
