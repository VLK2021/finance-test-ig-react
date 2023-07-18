const {createSlice} = require("@reduxjs/toolkit");


const initialState = {
    tickers: [],
    newTickers: [],
}

const tickerSlice = createSlice({
    name: 'tickerSlice',
    initialState,
    reducers: {
        getTickers: (state, action) => {
            state.tickers = action.payload;
        },
        delTickerFromArr: (state, action) => {
            return {
                ...state,
                newTickers: state.newTickers.length > 0 ?
                    state.newTickers.filter(obj => obj.ticker !== action.payload) :
                    state.tickers.filter(obj => obj.ticker !== action.payload)
            }
        },
    }
});

const {actions: {getTickers, delTickerFromArr}} = tickerSlice;
const tickerAction = {getTickers, delTickerFromArr};

export {tickerAction};
export default tickerSlice.reducer;