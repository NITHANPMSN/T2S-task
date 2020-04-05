import * as actionTypes from "../types";

let initialState = {
  data: [],
  searchedItem: []
};


export const fetchDataSuccess = (state, action) => {
  return {
    ...state,
    data: [...state.data, ...action.data]
  };
};

export const fetchSearchDataSuccess = (state, action) => {
  return {
    ...state,
    searchedItem: action.data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return fetchDataSuccess(state, action);
    case actionTypes.FETCH_SEARCH_DATA:
      return fetchSearchDataSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;