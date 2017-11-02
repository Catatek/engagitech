import React, { Component } from 'react';
import styles from './Container3.css';
import $ from 'jquery';
import * as ScrollMagic from 'scrollmagic'
import fade from '../../script.js';



class Container3 extends Component {
  render() {
    return (
      <div className="Container3">
        <div id="container3Id" className="container3Text">
          <p>
            With virtually endless possibilities, we'll create a completely
            custom  experience centered around your brand.
          </p>
          <p>
              Use your brand to fuse together the digital and physical world, or
            put your  audience in the center of it all, saturated in an exciting
            new world of you!
          </p>
          <h3>Let’s make your dream a reality.</h3>
        </div>
      </div>
    );
  }
}

export default Container3;
