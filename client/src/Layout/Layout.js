import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {TitleComponent} from "../component";


const Layout = () => {
    const currentTime = new Date().toLocaleDateString();


    return (
        <div className={'layout width'}>
            <TitleComponent/>

            <div className={'time width flex'}>
                {currentTime}
            </div>

            <div className={'outlet width'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;