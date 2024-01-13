import React, {useEffect, useState} from 'react';
import s from './Footer.module.css'
import { CiLocationOn } from "react-icons/ci";
import {IoIosArrowUp} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import SocLinks from "../SocLinks/SocLinks";
import {Link} from "react-router-dom";

function Footer(props) {
    const [top, setTop] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            setTop(window.scrollY,)
        })
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className={s.footer}>
            <div className={"containerMain"}>
                <div className={s.footerContent}>

                    <div className={s.about}>
                        <h2>About Me</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <SocLinks/>
                    </div>
                    <div>
                        <h2>Usefull Links</h2>
                        <ul>
                            <li>Trends of web design</li>
                            <li>Trends of web development</li>
                            <li>Trends of web technologies</li>
                        </ul>
                    </div>

                    <div className={s.links}>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link onClick={scrollTop} to={"/"}>Home</Link></li>
                            <li><Link onClick={scrollTop} to={"/about"}>About</Link></li>
                            <li><Link onClick={scrollTop} to={"/portfolio"}>Portfolio</Link></li>
                            <li><Link onClick={scrollTop} to={"/faq"}>FAQ</Link></li>
                            <li><Link onClick={scrollTop} to={"/contacts"}>Contacts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Have a Questions?</h2>
                        <ul className={s.addressPhone}>
                            <li>
                                <strong><FaLocationDot/></strong>
                                <p>
                                    203 Fake St. Mountain View, San Francisco, California, USA
                                </p>
                            </li>
                            <li>
                                <strong><FaPhone/></strong>
                                <a href="tel:+37497202302">
                                    +374 97 20 23 02
                                </a>
                            </li>
                            <li>
                                <strong><MdEmail/></strong>
                                <a href="mailto:tigran19910315@gmail.com">
                                    tigran19910315@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.copyright}>
                    Copyright © 2024 Tigran Avanesyan
                </div>
            </div>
            <div
                className={top < 300 ? s.toTopHide : s.toTop}
                onClick={scrollTop}
            >
                <IoIosArrowUp style={{fontSize: '28px', color: "white"}}/>
            </div>
        </div>
    );
}

export default Footer;