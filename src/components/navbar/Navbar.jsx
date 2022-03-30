import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logonew.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="lnk__navbar">
      <div className="lnk__navbar-links">
        <div className="lnk__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="lnk__navbar-links_container">
          <p><a href="#home">Services</a></p>
          <p><a href="#wlnk">Nodes</a></p>
          <p><a href="#possibility">Docs</a></p>
          <p><a href="#features">Education</a></p>
          <p><a href="#blog">Contact</a></p>
        </div>
      </div>
      <div className="lnk__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="lnk__navbar-menu_container scale-up-center">
          <div className="lnk__navbar-menu_container-links">
            <p><a href="#home">Services</a></p>
            <p><a href="#wlnk">Nodes</a></p>
            <p><a href="#possibility">Docs</a></p>
            <p><a href="#features">Education</a></p>
            <p><a href="#blog">Contact</a></p>
          </div>
          <div className="lnk__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
