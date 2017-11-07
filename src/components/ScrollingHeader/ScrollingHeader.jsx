import React, { Component } from 'react';
import styles from './ScrollingHeader.css';
import Logo from '../../Assets/engagitechLogo.png';
import Mobilelogo from '../../Assets/favicon.png';

class ScrollingHeader extends Component {
  render() {
    return (
      <div className="ScrollingHeader">
        <img
          className="scrollingHeaderMobileLogo"
          src={Mobilelogo}
          alt="Engagitech Logo"
        />
        <img className="scrollingHeaderLogo" src={Logo} alt="Engagitech Logo" />
        <div className="contactInfo">
          <a href="tel:833.736.4243"><h4>833.736.4243</h4></a>
          <div className="contactUsDiv">
            <a href="https://form.jotform.com/73046790284158" target="_blank">
              <h3>Contact Us</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollingHeader;
