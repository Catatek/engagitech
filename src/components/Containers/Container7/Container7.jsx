import React, { Component } from 'react';
import styles from './Container7.css';
import ReactPlayer from 'react-player'
import Video from '../../Assets/video.mp4'

class Container7 extends Component {
  render() {
    return (
      <div className="Container7">
        <div className="flowCam">
          <ReactPlayer url={Video} playing loop width="100%" height="100%" />
        </div>
        <div id="container7Id" className="container7Text">
          <h2 id="letsMove">FLOW CAM</h2>
          <h3>YOU'RE NOT TWO-DIMENSIONAL </h3>
          <p>
            Your content doesn't need to be either.  Flow Cam moves around your
            guests, capturing their best sides.
          </p>
          <p>
            Within seconds they'll have a rich 3D GIF animation, branded and
             suited up for endless social sharing. There's nothing back and
            forth  about your growing engagement.
          </p>
        </div>
      </div>
    );
  }
}

export default Container7;
