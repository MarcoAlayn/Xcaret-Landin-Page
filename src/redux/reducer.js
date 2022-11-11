/* eslint-disable no-case-declarations */
import { SET_SPANISH_LENG, SET_ENGLISH_LENG, API_DATA } from "./actions";

const initialState = {
  allData: [],
  lang: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case API_DATA:
      return {
        ...state,
        allData: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
