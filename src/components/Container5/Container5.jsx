import React, { Component } from 'react';
import styles from './Container5.css';
import Station from '../../Assets/mediaStation.png';
import Phone from '../../Assets/phone.png';

class Container5 extends Component {
  render() {
    return (
      <div className="Container5" id="trigger">
        <div className="photoStation">
          <img className="station" src={Station} alt="Photo Booth Station" />
          {/* <img id="object1" src={Phone} alt="phone" /> */}
        </div>
        <div id="container5Id" className="container5Text">
          <h2>MEDIA STATION</h2>
          <p>Looking for a monster content creator?  </p>
          <p>
            Look no further; our Media Station is loaded with features that will make  your brand soar. Printed photos,
            moving GIFs, interactive videos and  everything in between, if you can dream it, we can brand it.
          </p>
          <p>
            Your guests will have delicious content flowing out of their pockets and inboxes;  constant reminders of the
            amazing time they had interacting with your brand.
          </p>
        </div>
      </div>
    );
  }
}

export default Container5;
