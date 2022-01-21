import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

import authReducer from "./auth-reducer";
import carsReducer from "./cars-reducer";

let reducers = combineReducers({
    authReducer,
    carsReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.__store__ = store;

export default store