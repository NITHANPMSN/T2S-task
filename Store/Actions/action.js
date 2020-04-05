import * as actionTypes from "../types";
import axios from "axios";

export const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA,
    data
  };
};

export const fetchData = (startIndex) => async dispatch => {
  try {
    let result = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=15`);
    dispatch(fetchDataSuccess(result.data));
  } catch (err) {
    console.log(err);
  }
};


export const fetchSearchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_SEARCH_DATA,
    data
  };
};

export const fetchSearchData = (data) => async dispatch => {
  try {
    dispatch(fetchSearchDataSuccess(data));
  } catch (err) {
    console.log(err);
  }
};
