import React, { Component } from 'react';
import './Container2.css';

import headset from '../../Assets/vrHeadset2.png';
import headset2 from '../../Assets/headset.png';
import globe from '../../Assets/vrGlobe.png';
import line from '../../Assets/line.png';

class Container2 extends Component {
  render() {
    return (
      <div className="Container2">
        <div className="vrText" id="letsMoveItYeah">
          <span>vr</span>
          <span>+</span>
          <span>ar</span>
        </div>
        <img className="headset" src={headset} alt="" />
        <img className="headset2" id="headset2" src={headset2} alt="" />
        <img className="globe" src={globe} alt="" />
      </div>
    );
  }
}

export default Container2;
