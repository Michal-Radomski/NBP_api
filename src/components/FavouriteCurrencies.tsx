import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";

import {H2} from "./CurrencyList";
import ConfirmationModal from "./ConfirmationModal";

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

  const favouriteCurrencies =
    currencies !== undefined ? currencies.filter((currency: Currency) => currency.isFavourite === true) : [];
  console.log("favouriteCurrencies:", favouriteCurrencies);

  return (
    <React.Fragment>
      <H2 style={{marginBottom: "2px"}}>List of Favourite Currencies</H2>

      <div className="center">
        <ConfirmationModal />
      </div>

      <Container>empty</Container>
    </React.Fragment>
  );
};

export default FavouriteCurrencies;
