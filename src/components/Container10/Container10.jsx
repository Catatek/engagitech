import React, { Component } from 'react';
import styles from './Container10.css';
import WristBand from '../../Assets/wristBand.png';

class Container10 extends Component {
  render() {
    return (
      <div className="Container10">
        <h2 className="container10Header">
          not all wristwear is created equal.
        </h2>
        <div className="container10Row">
          <img src={WristBand} alt="Engagitech Wristband" />
          <div className="container10Text" id="container10Id">
            <h2>RFID</h2>
            <p>Streamline the experience with one wristband.</p>
            <p>
              Streamline the experience with one wristband. At the start  of
              your event we’ll give your audience a custom wristband, enabling
              them to instantly access and socially share all of their curated
              content at just the swipe of a wrist.
            </p>
            <p>
              Expect an increase of your brand’s reach with our seamless RFID
              technology.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Container10;
