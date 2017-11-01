import React, { Component } from 'react';
import styles from './Container4.css';
import Hashtag from '../../Assets/hashtag.png';

class Container4 extends Component {
  render() {
    return (
      <div className="Container4">
        <div className="div1">
          <h2>#HASHTAG PRINTING</h2>
          <p>
            Hashtag Printing takes guests' photos from digital to physical.
             Guests snap photos on their phone, post them to Instagram using
             your #hashtag and their picture prints out at the printing station!
          </p>
          <p>
            Prints are framed and branded with your custom content, providing
             guests with a memorable keepsake with your brand printed in their
            hands.
          </p>
        </div>
        <div className="div2">
          <img className="hashtagSVG" src={Hashtag} alt="Hashtag" />
        </div>
      </div>
    );
  }
}

export default Container4;
