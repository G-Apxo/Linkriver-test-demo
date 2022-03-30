import React from 'react';
import Feature from '../../components/feature/Feature';
import './Nodes.css';

const Nodes = () => (
  <div className="lnk__whatlnk section__margin" id="wlnk">
    <div className="lnk__whatlnk-feature">
      <Feature title="Nodes" text="" />
    </div>
    <div className="lnk__whatlnk-heading">
      <h1 className="gradient__text">Polygon & xDai nodes</h1>
    </div>
    <div className="lnk__whatlnk-container">
      <Feature title="Polygon Mainnet" text="Please contact us via our official e-mail if you want to request our Polygon mainnet node.Oracle address:0xc8D925525CA8759812d0c299B90247917d4d4b7C Jobs & reputation:" />
      <Feature title="Polygon Mumbai" text="Oracle address: 0xc8D925525CA8759812d0c299B90247917d4d4b7C Jobs & reputation:" />
      <Feature title="xDai Mainnet" text="Please contact us via our official e-mail if you want to request our xDai mainnet node.Oracle address:0xc8D925525CA8759812d0c299B90247917d4d4b7C Jobs & reputation:" />
    </div>
  </div>
);

export default Nodes;
