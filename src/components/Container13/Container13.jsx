import React, { Component } from 'react';
import styles from './Container13.css';
import Logo from '../../Assets/engagitechLogo.png';

class Container13 extends Component {
  render() {
    return (
      <div className="Container13">
        <div className="bookNow">
          <h2>Book Now</h2>
        </div>
        <div className="container13Row">
          <h3>Connect with us</h3>
          <div className="socialMedia">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Container13;
