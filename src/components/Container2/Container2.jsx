import React, { Component } from 'react';
import './Container2.css';

import headset from '../../Assets/vrHeadset2.png';
import globe from '../../Assets/vrGlobe.png';
import line from '../../Assets/line.png';

class Container2 extends Component {
  render() {
    return (
      <div className="Container2">
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

export default Container2;
