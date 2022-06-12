import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {H2} from "./CurrencyList";
import {delFavourites} from "../redux/actions";

const Container = styled.div`
  width: 90%;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: whitesmoke;
`;

const FavouriteCurrencies = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;

  const resetFavourites = () => {
    dispatch(delFavourites(false));
  };

  const favouriteCurrencies =
    currencies !== undefined ? currencies.filter((currency: Currency) => currency.isFavourite === true) : [];
  console.log("favouriteCurrencies:", favouriteCurrencies);

  return (
    <React.Fragment>
      <H2>List of Favourite Currencies</H2>
      <Container>
        <button onClick={() => resetFavourites()}>Del Fav</button>
      </Container>
    </React.Fragment>
  );
};

export default FavouriteCurrencies;
