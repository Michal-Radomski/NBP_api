import {combineReducers} from "redux";

import {GET_RATES} from "./actions";

const initialState: State = {};

const getRates = function (state = initialState, action: Dispatch) {
  switch (action.type) {
    case GET_RATES:
      return {...state, currencies: action.payload};
    default:
      return state;
  }
};

// CombineReducer
const rootReducer = combineReducers({
  rates: getRates,
});

export default rootReducer;
