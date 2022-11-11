import axios from "axios";

// export types
export const SET_SPANISH_LENG = "SET_SPANISH_LENG";
export const SET_ENGLISH_LENG = "SET_ENGLISH_LENG";
export const API_DATA = "LOGO_BRAND";

// action creators
export const setSpanish = () => {
  return (dispatch) => {
    return dispatch({
      type: SET_SPANISH_LENG,
    });
  };
};

export const setEnglish = () => {
  return (dispatch) => {
    return dispatch({
      type: SET_ENGLISH_LENG,
    });
  };
};

export const apiData = () => {
  return async (dispatch) => {
    const api = await axios.get(
      "https://raw.githubusercontent.com/javialcocer/test-json/main/data.json"
    );
    return dispatch({
      type: API_DATA,
      payload: api.data,
    });
  };
};
