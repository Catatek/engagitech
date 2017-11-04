import React, { Component } from 'react';
import Logo from '../../Assets/engagitechLogo.png';
import styles from './Header.css';
import Particles from 'react-particles-js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Particles  params={{
            		particles: {
                  "number": {
                    "value": 20
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "size": {
                    "value": 2.0
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                  },
                  "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": true,
                    }
                  },
            			"line_linked": {
                    "enable": false,
            				shadow: {
            					enable: false,
            				}
            			}
            		}
            	}}
              style={{
               width: '100vh',
               height: '100%',
               position: 'absolute',
               top: '0',
               right: '0'

             }}
              />
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
