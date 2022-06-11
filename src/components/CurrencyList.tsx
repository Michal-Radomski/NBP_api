import React from "react";
import {useSelector} from "react-redux";

const CurrencyList = (): JSX.Element => {
  const {currencies} = useSelector((state: State) => state?.rates ?? undefined) as State;
  console.log("currenciesList.currencies:", currencies);

  const currenciesList =
    currencies !== undefined
      ? currencies.map((currency: Currency) => <li key={currency.code}>{currency.code}</li>)
      : "No Data - Loading";
  // console.log("currenciesList:", currenciesList);

  return (
    <div>
      List of Currencies
      <ul>{currenciesList}</ul>
    </div>
  );
};

export default CurrencyList;
