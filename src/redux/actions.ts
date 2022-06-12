import axios from "axios";

export const GET_RATES = "GET_RATES";
export const SET_FAVOURITES = "SET_FAVOURITES";

export const getCurrencies = () => (dispatch: Dispatch) => {
  axios
    .get("https://api.nbp.pl/api/exchangerates/tables/A")
    .then((response) => {
      const currencies = response.data[0].rates.map((currency: Currency) => ({...currency, isFavourite: false}));

      // console.log({currencies});
      dispatch({type: GET_RATES, payload: currencies});
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setFavourites = (index: number) => {
  // console.log(index);
  return {type: SET_FAVOURITES, payload: index};
};
