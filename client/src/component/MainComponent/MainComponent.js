import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {io} from "socket.io-client";

import './MainComponentStyle.css';
import {tickerAction} from "../../store/tickerSlice";
import {Ticker} from "../Ticker/Ticker";
import {names} from "../../constants";


const MainComponent = () => {
    const dispatch = useDispatch();
    const {tickers, newTickers} = useSelector(store => store.tickers);


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
            <div className={'names width'}>
                {
                    names.map(tick => <h3 className={'names-one flex'} key={tick.id}>{tick.title}</h3>)
                }
            </div>

            <div className={'mainComponent-block width'}>
                {
                    newTickers.length !== 0 ?
                        newTickers.map(tick => <Ticker key={tick.ticker} tick={tick}/>) :
                        tickers.map(tick => <Ticker key={tick.ticker} tick={tick}/>)
                }
            </div>
        </div>
    );
};

export {MainComponent};


