import React, { Component } from 'react';
import styles from './Container10.css';
import WristBand from '../../Assets/wristBand.png';

class Container10 extends Component {
  render() {
    return (
      <div className="Container10">
        <h2 className="container10Header">not all wristwear is created equal.</h2>
        <div className="container10Row">
          <div className="wristBand">
            <img src={WristBand} alt="Engagitech Wristband" />
          </div>
          <div className="container10Text">
            <h2>RFID</h2>
            <p>Streamline the experience with one wristband.</p>
            <p>We’ll give your audience a custom wristband at the start  of your event and enable all their curated photo and video  animation to instantly be shared to all of their social channels  with just a swipe of the wrist.</p>
            <p>Expect an increase of your brand’s reach with our seamless RFID technology.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Container10;
