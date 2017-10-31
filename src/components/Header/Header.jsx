import React, { Component } from 'react';
import Logo from '../../assets/engagitechLogo.png';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={Logo} className="engagitechLogo" alt="Engagitech Logo" />
        <div className="buttonDiv">
          <h3>What we offer</h3>
          <i class="fa fa-angle-down bounce" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Header;
