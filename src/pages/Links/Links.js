import React from 'react';
import {Link} from "react-router-dom";
import s from "./Links.module.css"
import {useSelector} from "react-redux";

function Links() {

    const activeLink = useSelector((store)=>store.activeLink)

    return (
        <div className={s.wrapper}>
            <Link className={activeLink === "/"? s.active : s.link} to={"/"}>Home</Link>
            <Link className={activeLink === "/about"? s.active : s.link} to={"/about"}>About</Link>
            <Link className={activeLink === "/portfolio"? s.active : s.link} to={"/portfolio"}>Portfolio</Link>
            <Link className={activeLink === "/faq"? s.active : s.link} to={"/faq"}>FAQ</Link>
            <Link className={activeLink === "/contacts"? s.active : s.link} to={"/contacts"}>Contacts</Link>
        </div>
    );
}

export default Links;