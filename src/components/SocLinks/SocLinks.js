import React from 'react';
import s from './SocLinks.module.css'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function SocLinks(props) {
    return (
        <div className={s.links}>
            <a href='https://github.com/tigranavanesyan' target='_blank'><IoLogoGithub/></a>
            <a href='https://www.linkedin.com/in/tigran-avanesyan/' target='_blank'><FaLinkedinIn/></a>
            <a href='#'><FaFacebookF/></a>
        </div>
    );
}

export default SocLinks;