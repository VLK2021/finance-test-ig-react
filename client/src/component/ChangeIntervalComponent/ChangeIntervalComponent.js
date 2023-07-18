import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';

import './ChangeIntervalComponentStyle.css';


const ChangeIntervalComponent = () => {
    //початкове значення шртервалу
    const [interval, setInterval] = useState(5000);

    useEffect(() => {
        const storedInterval = parseInt(localStorage.getItem('interval'), 10);
        if (storedInterval) {
            setInterval(storedInterval);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('interval', interval.toString());
    }, [interval]);


    const handleIntervalChange = (event) => {
        const newInterval = parseInt(event.target.value, 10);
        setInterval(newInterval);

        // Відправка нового значення на сервер
        const socket = io('http://localhost:4000/');
        socket.emit('updateInterval', newInterval);
    };


    return (
        <div className={'changeIntervalComponent width'}>
            <p className={'width flex'}>changing display interval</p>

            <select value={interval} onChange={handleIntervalChange}>
                <option value="500">0.5 секунд</option>
                <option value="1000">1 секунд</option>
                <option value="2000">2 секунд</option>
                <option value="3000">3 секунд</option>
                <option value="5000">5 секунд</option>
                <option value="8000">8 секунд</option>
                <option value="10000">10 секунд</option>
            </select>
        </div>
    );
};

export default ChangeIntervalComponent;

