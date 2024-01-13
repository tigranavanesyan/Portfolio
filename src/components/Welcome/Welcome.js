import React from 'react';
import s from './Welcome.module.css'
import SocLinks from "../SocLinks/SocLinks";

function Welcome(props) {
    return (
        <div className={s.wrapper}>
            <h1>
                I'm Tigran Avanesyan, a front end web developer
            </h1>
            <SocLinks/>


        </div>
    );
}

export default Welcome;