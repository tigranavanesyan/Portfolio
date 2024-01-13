import React, {useEffect, useState} from 'react';
import style from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {

  const activeLink = useSelector((store)=>store.activeLink)
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if(nav){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [nav]);
  return (
    <div>
      <div className='containerMain'>
        <div className={style.box}>
          <div
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <Link onClick={()=>setNav(false)} className={activeLink === "/"? style.active : style.link} to={"/"}>Home</Link>
            <Link onClick={()=>setNav(false)} className={activeLink === "/about"? style.active : style.link} to={"/about"}>About</Link>
            <Link onClick={()=>setNav(false)} className={activeLink === "/portfolio"? style.active : style.link} to={"/portfolio"}>Portfolio</Link>
            <Link onClick={()=>setNav(false)} className={activeLink === "/faq"? style.active : style.link} to={"/faq"}>FAQ</Link>
            <Link onClick={()=>setNav(false)} className={activeLink === "/contacts"? style.active : style.link} to={"/contacts"}>Contacts</Link>
          </div>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
