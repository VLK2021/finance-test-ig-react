import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {io} from "socket.io-client";

import './MainComponentStyle.css';
import {tickerAction} from "../../store/tickerSlice";


const MainComponent = () => {
    const dispatch = useDispatch();
    const {tickers} = useSelector(store => store.tickers);

    const names = [
        'Ticker',
        'Exchange',
        'Name',
        'Price',
        'Change',
        'Percent',
        'Dividend',
        'Yield',
        'Last trade',
    ]

    useEffect(() => {
        const socket = io('http://localhost:4000/');
        socket.on('connect', () => console.log(socket.connected));
        socket.emit('start')
        socket.on('ticker', function (data) {
            dispatch(tickerAction.getTickers(data));
        });
    }, [dispatch]);


    return (
        <div className={'mainComponent width'}>
            <div className={'names'}>
                {
                    names.map(tick => <h3 className={'names-one'}>{tick}</h3>)
                }
            </div>
        </div>
    );
};

export {MainComponent};