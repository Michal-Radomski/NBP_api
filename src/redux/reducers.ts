import {combineReducers} from "redux";

import {GET_RATES, SET_FAVOURITES, DELETE_FAVOURITES} from "./actions";

const initialState: State = {};

const getRates = function (state = initialState, action: Dispatch) {
  switch (action.type) {
    case GET_RATES:
      return {...state, currencies: action.payload};

    case SET_FAVOURITES:
      return {
        ...state,
        currencies: state.currencies.map((currency: Currency, index: number) => {
          // console.log({state});
          return index === action.payload ? {...currency, isFavourite: !currency.isFavourite} : currency;
        }),
      };

    case DELETE_FAVOURITES:
      return {
        ...state,
        currencies: state.currencies.map((currency: Currency) => {
          // console.log({state});
          return {...currency, isFavourite: false};
        }),
      };

    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers({
  rates: getRates,
});

export default rootReducer;
