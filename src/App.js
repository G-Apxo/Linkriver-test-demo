import React from 'react';

import { Footer, Possibility, Features, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';
import Nodes from './containers/nodes/Nodes';
import Nodesmain from './containers/nodesfirst/Nodesmain';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Possibility />
    <Nodesmain />
    <Nodes />
    <Features />
    <CTA />
    <Footer />
  </div>
);

export default App;
