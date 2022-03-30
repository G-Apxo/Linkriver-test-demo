import React from 'react';
import linrkiverside from '../../assets/linkriversideimg.png';
import linkservices from '../../assets/Grafik3.png';
import './possibility.css';

const Possibility = () => (
  <div className="lnk__possibility section__padding" id="possibility">
    <div className="lnk__possibility-image">
      <img src={linrkiverside} alt="possibility" />
    </div>
    <div className="lnk__possibility-content">
      <h1 className="gradient__text">Our services:</h1>
      <p>LinkRiver is a Chainlink node service provider that offers infrastructure and software solutions to connect smart contracts to real-world data and off-chain computation.</p>
      <p>Our Chainlink nodes participate in various Decentralized Oracle Networks powering the Chainlink Data Feeds, Proof of Reserve and Keepers on a variety of networks.</p>
      <p>We further offer the development of External Adapters to easily integrate custom computation and any public or private web API into your smart contracts.</p>
      <p>Our team is constantly researching the latest technological advances and provides consulting on the deployment and maintenance of reliable Chainlink node environments.</p>
      <p>In order to hold up the sophisticated security and latency requirements of the leading oracle solution, our technical infrastructure is permanently monitored and highly available.</p>
      <img className="linkservices" src={linkservices} alt="possibility" />
    </div>
  </div>
);

export default Possibility;
