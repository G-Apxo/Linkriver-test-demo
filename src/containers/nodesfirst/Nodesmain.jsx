import React from 'react';
import Feature from '../../components/feature/Feature';
import './Nodesmain.css';

const Nodesmain = () => (
  <div className="lnk__whatlnk section__margin" id="wlnk">
    <div className="lnk__whatlnk-feature">
      <Feature title="Nodes" text="" />
    </div>
    <div className="lnk__whatlnk-heading">
      <h1 className="gradient__text">Ethereum nodes</h1>
    </div>
    <div className="lnk__whatlnk-container">
      <Feature title="Mainnet" text="Please contact us via our official e-mail if you want to request our Ethereum mainnet node." />
      <Feature title="Kovan" text="Oracle address: 0xF405B99ACa8578B9eb989ee2b69D518aaDb90c1F Jobs & reputation:" />
      <Feature title="Rinkeby" text="Oracle address: 0xF405B99ACa8578B9eb989ee2b69D518aaDb90c1F Jobs & reputation:" />
    </div>
  </div>
);

export default Nodesmain;
