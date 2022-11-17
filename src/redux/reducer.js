/* eslint-disable no-case-declarations */
import {
  API_DATA,
  SET_SPANISH_LENG,
  SET_ENGLISH_LENG,
  SET_CURRENCY_USD,
  SET_CURRENCY_MEX,
  SET_CURRENCY_EUR,
} from "./actions";

const initialState = {
  allData: [],
  lang: [],
  currency: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_DATA:
      return {
        ...state,
        allData: action.payload,
      };
    case SET_SPANISH_LENG:
      return {
        ...state,
        lang: ["es"],
      };
    case SET_ENGLISH_LENG:
      return {
        ...state,
        lang: ["en"],
      };
    case SET_CURRENCY_USD:
      return {
        ...state,
        currency: ["usd"],
      };
    case SET_CURRENCY_MEX:
      return {
        ...state,
        currency: ["mex"],
      };
    case SET_CURRENCY_EUR:
      return {
        ...state,
        currency: ["eur"],
      };
    default:
      return state;
  }
};
export default rootReducer;
