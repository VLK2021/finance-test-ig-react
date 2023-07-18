import React from 'react';
import {Outlet} from 'react-router-dom';
import {BsSun, BsMoonFill} from "react-icons/bs";

import './LayoutStyle.css';
import {ChangeIntervalComponent, FooterComponent, TitleComponent} from "../component";


const Layout = () => {
    const currentTime = new Date().toLocaleDateString();

    const onchange = () => {
        document.body.classList.toggle("lightTherm")
    }


    return (
        <div className={'layout width'}>
            <TitleComponent/>

            <div className={'time width flex'}>
                <div className={'sunMoon flex'}>
                    <div className={'moon'}><BsMoonFill/></div>

                    <div className="form-check form-switch toggle">
                        <input type="checkbox"
                               onChange={event => onchange(event.target.value)}
                        />
                    </div>

                    <div className={'sun'}><BsSun/></div>
                </div>


                <div className={'flex currentTime'}>
                    {currentTime}
                </div>
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