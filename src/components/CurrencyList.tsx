import React from "react";
import {useSelector} from "react-redux";

const CurrencyList = (): JSX.Element => {
  const currenciesList = useSelector((state: State) => state?.rates ?? "No Data") as State;

  console.log("currenciesList:", currenciesList);
  return <div>CurrencyList</div>;
};

export default CurrencyList;
