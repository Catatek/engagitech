import React, { Component } from 'react';
import './Panel2.css';

import headset from '../../assets/vrHeadset.png';
import globe from '../../assets/vrGlobe.png';
import line from '../../assets/line.png';

class Panel2 extends Component {
  render() {
    return (
      <div className="Panel2">
        <div className="vrText">
          <span>vr</span>
          <span id="plus">+</span>
          <span>ar</span>
        </div>
        <div className="headsetContainer">
          <img className="headset" src={headset} alt="" />
          <img id="line" src={line} alt="" />
        </div>
        <img src={globe} alt="" />
      </div>
    );
  }
}

export default Panel2;
