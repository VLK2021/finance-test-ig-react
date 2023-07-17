import {combineReducers, configureStore} from "@reduxjs/toolkit";

import tickerReducer from './tickerSlice';


const rootReducer = combineReducers({
    tickers: tickerReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;