import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {ChangeIntervalComponent, FooterComponent, TitleComponent} from "../component";


const Layout = () => {
    const currentTime = new Date().toLocaleDateString();


    return (
        <div className={'layout width'}>
            <TitleComponent/>

            <div className={'time width flex'}>
                {currentTime}
            </div>

            <div className={'width'}>
                <ChangeIntervalComponent/>
            </div>

            <div className={'outlet width'}>
                <Outlet/>
            </div>

            <div className={'width'}>
                <FooterComponent/>
            </div>
        </div>
    );
};

export default Layout;