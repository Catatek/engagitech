import React, { Component } from 'react';
import './Panel2.css';

import headset from '../../Assets/vrHeadset2.png';
import globe from '../../Assets/vrGlobe.png';
import line from '../../Assets/line.png';

class Panel2 extends Component {
  render() {
    return (
      <div className="Panel2">
        <div className="vrText">
          <span>vr</span>
          <span>+</span>
          <span>ar</span>
        </div>
        <div className="headsetContainer">
          <img className="headset" src={headset} alt="" />
        </div>
        <div className="globeContainer">
          <img className="globe" src={globe} alt="" />
        </div>
      </div>
    );
  }
}

export default Panel2;
