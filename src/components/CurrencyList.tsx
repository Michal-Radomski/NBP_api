import React from "react";
import {useSelector} from "react-redux";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const StyledSpan = styled.span`
  float: right;
  font-weight: bolder;
`;

const CurrencyList = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;
  console.log("currenciesList.currencies:", currencies);

  const currenciesList =
    currencies !== undefined
      ? currencies.map((currency: Currency) => (
          <Card
            key={currency.code}
            border="info"
            style={{width: "380px", height: "150px", borderRadius: "0.25rem"}}
            as="div"
          >
            <Card.Header as="div">
              <Card.Title as="h2" style={{marginBottom: "6px", textAlign: "center"}}>
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
        ))
      : "No Data - Loading";
  // console.log("currenciesList:", currenciesList);

  return <React.Fragment>{currenciesList}</React.Fragment>;
};

export default CurrencyList;
