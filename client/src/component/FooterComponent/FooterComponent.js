import React from 'react';

import './FooterComponentStyle.css';
import logo512 from '../../images/logo512.png';


const FooterComponent = () => {

    return (
        <div className={'footerComponent width flex'}>
            <img src={logo512} alt="logo"/>
            <p>React - </p>
            <h5>Copyright © 2023 Volodymyr Kostiuk.</h5>
        </div>
    );
};

export {FooterComponent};