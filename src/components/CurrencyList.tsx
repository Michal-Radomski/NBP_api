import React from "react";
import {useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledSpan = styled.span`
  float: right;
  font-weight: bolder;
`;

const H2 = styled.h1`
  text-align: center;
  color: darkblue;
  margin: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-items: center;
  gap: 5px;
  margin: 15px;
`;

const CurrencyList = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;
  // console.log("currenciesList.currencies:", currencies);

  const currenciesList =
    currencies !== undefined ? (
      <Container>
        {currencies.map((currency: Currency) => (
          <Card
            key={currency.code}
            border="info"
            style={{width: "380px", height: "145px", borderRadius: "0.25rem"}}
            as="div"
            className="currencyCard"
          >
            <Card.Header as="div">
              <Card.Title as="h3" style={{marginBottom: "6px", textAlign: "center"}}>
                {currency.code}
              </Card.Title>
            </Card.Header>
            <Card.Body as="div">
              <Card.Text as="p" style={{marginBottom: "6px", textTransform: "capitalize"}}>
                Name: <StyledSpan>{currency.currency}</StyledSpan>
              </Card.Text>
              <Card.Text as="p">
                Rate: <StyledSpan>{currency.mid}</StyledSpan>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    ) : (
      <h1 style={{color: "darkmagenta", textAlign: "center", fontWeight: "bolder"}}>No Data - Loading...</h1>
    );
  // console.log("currenciesList:", currenciesList);

  return (
    <React.Fragment>
      <H2>List of Available Currencies</H2>
      {currenciesList}
    </React.Fragment>
  );
};

export default CurrencyList;
