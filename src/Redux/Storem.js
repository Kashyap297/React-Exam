import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import examReducer from "./Reducer";

const store = createStore(examReducer, applyMiddleware(thunk))

export default store