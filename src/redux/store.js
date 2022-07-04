import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const preloadedState = {}

const store = configureStore({
    reducer:reducers,
    preloadedState,
    middleware:[thunk]
})

export default store