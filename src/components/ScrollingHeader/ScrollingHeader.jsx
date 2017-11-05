import React, { Component } from 'react'
import styles from './ScrollingHeader.css'
import Logo from '../../Assets/engagitechLogo.png';

class ScrollingHeader extends Component {
  render () {
    return (
    <div className='ScrollingHeader'>
      <img src={Logo} alt="Engagitech Logo" />
      <div className="contactInfo">
        <h4>833.736.4243</h4>
        <h3>Contact Us</h3>
      </div>
    </div>
    )
  }
}

export default ScrollingHeader
