import React from 'react';
import s from './SocLinks.module.css'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function SocLinks(props) {
    return (
        <div className={s.links}>
            <span><IoLogoGithub/></span>
            <span><FaLinkedinIn/></span>
            <span><FaFacebookF/></span>
        </div>
    );
}

export default SocLinks;