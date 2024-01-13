import React from 'react';
import Links from "../../pages/Links/Links";
import s from './Header.module.css'
import Navbar from "../navbar/Navbar";
import logo from '../../assets/logo.svg'

function Header(props) {
    return (
        <div className={s.headerWrapper}>
            <div className={"containerMain"}>
                <div className={s.content}>
                    <div className={s.logo}>

                        <img src={logo}/>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}

export default Header;