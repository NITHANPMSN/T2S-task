
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducers/reducer";


const rootReducer = combineReducers({
  data: Reducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;