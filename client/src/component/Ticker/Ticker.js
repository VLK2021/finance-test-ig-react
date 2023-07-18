import React, {useEffect, useState} from 'react';

import './TickerStyle.css';
import {useDispatch} from "react-redux";
import {tickerAction} from "../../store/tickerSlice";
import {changeName} from "../../constants";


const Ticker = ({tick}) => {
    const [lastChange, setLastChange] = useState(tick.change);
    const [colorChange, setColorChange] = useState('');
    const [operation, setOperation] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (tick.change > lastChange) {
            setColorChange('green');
            setOperation('+');
        } else {
            setColorChange('red');
            setOperation('-');
        }
        setLastChange(tick.change);
    }, [tick.change]);


    const deleteTicker = () => {
        dispatch(tickerAction.delTickerFromArr(tick.ticker));
    }


    return (
        <div className={'ticker'}>
            <h4>{tick.ticker} </h4>
            <h4>{tick.exchange} </h4>
            <h4  className={colorChange}>{changeName(tick.ticker)}</h4>
            <h4>{tick.price} $</h4>
            <h4 className={colorChange}>{operation + tick.change} $</h4>
            <h4 className={colorChange}>{operation + tick.change_percent} %</h4>
            <h4>{tick.dividend}</h4>
            <h4>{tick.yield}</h4>
            <h4>{tick.last_trade_time}</h4>
            <button onClick={deleteTicker}>delete</button>
        </div>
    );
};

export {Ticker};