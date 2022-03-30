import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="lnk__header section__padding" id="home">
    <div className="lnk__header-content">
      <h1 className="gradient__text">Chainlink node <br /> service provider</h1>
      <p>Decentralized data flow for a transparent world.</p>
    </div>

    <div className="lnk__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
