import React from "react";
import {useSelector} from "react-redux";
import Card from "react-bootstrap/Card";

const CurrencyList = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;
  console.log("currenciesList.currencies:", currencies);

  const currenciesList =
    currencies !== undefined
      ? currencies.map((currency: Currency) => (
          <Card
            key={currency.code}
            border="info"
            style={{width: "300px", height: "120px", borderRadius: "0.25rem"}}
            as="div"
          >
            <Card.Body>
              <Card.Title>{currency.code}</Card.Title>
              <Card.Text>
                Name: {currency.currency}
                <br />
                Rate: {currency.mid}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      : "No Data - Loading";
  // console.log("currenciesList:", currenciesList);

  return <React.Fragment>{currenciesList}</React.Fragment>;
};

export default CurrencyList;
