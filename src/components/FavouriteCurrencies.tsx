import React from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import {Card} from "react-bootstrap";

import {H2} from "./CurrencyList";
import ConfirmationModal from "./ConfirmationModal";

const Container = styled.div`
  width: 90%;
  height: 192px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: inherit;
`;

const CurrencyList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 3px;
`;

const FavouriteCurrencies = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;

  const favouriteCurrencies =
    currencies !== undefined ? currencies.filter((currency: Currency) => currency.isFavourite === true) : [];
  // console.log("favouriteCurrencies:", favouriteCurrencies);

  const favouriteCurrenciesList =
    favouriteCurrencies.length >= 1 ? (
      <CurrencyList>
        {favouriteCurrencies.map((currency: Currency) => (
          <Card
            key={currency.code}
            border="success"
            style={{
              width: "95px",
              height: "62px",
              borderRadius: "0.2rem",
              textAlign: "center",
              backgroundColor: "orange",
            }}
          >
            <Card.Title style={{marginBottom: "2px", textAlign: "center"}}>{currency.code}</Card.Title>
            <Card.Body style={{padding: "5px"}}>
              <Card.Text>
                Rate: <span style={{fontWeight: "bold"}}>{currency.mid.toFixed(3)}</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CurrencyList>
    ) : (
      <div style={{color: "darkmagenta", textAlign: "center", padding: "20px 0"}}>
        <h1>List is empty...</h1>
        <h2>Click on a currency to add it to your favorites list</h2>
        <h2>Click on a currency again to remove it from the favorites list</h2>
      </div>
    );

  return (
    <React.Fragment>
      <H2 style={{marginBottom: "2px"}}>List of Favourite Currencies</H2>

      <div className="center">
        <ConfirmationModal />
      </div>

      <Container>{favouriteCurrenciesList}</Container>
    </React.Fragment>
  );
};

export default FavouriteCurrencies;
