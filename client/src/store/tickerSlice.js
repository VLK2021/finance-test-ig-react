const {createSlice} = require("@reduxjs/toolkit");



const initialState = {
    tickers: []
}

const tickerSlice = createSlice({
    name: 'tickerSlice',
    initialState,
    reducers: {
        getTickers: (state, action) => {
            state.tickers = action.payload;
        }
    }
});

const {actions: {getTickers}} = tickerSlice;
const tickerAction = {getTickers};

export {tickerAction};
export default tickerSlice.reducer;