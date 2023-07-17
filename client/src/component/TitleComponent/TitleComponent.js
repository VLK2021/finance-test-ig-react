import React, {useEffect, useState} from 'react';

import './TitleComponentStyle.css';



const TitleComponent = () => {
    const colors = ['green', 'red', 'blue', 'lightseagreen', 'orange'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];

    return (
        <div className={'titleComponent width flex'}>
            <p style={{color: currentColor}}>finance test task</p>
        </div>
    );
};

export {TitleComponent};