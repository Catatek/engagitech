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
        <a href="https://form.jotform.com/73046790284158" target="_blank"><h3>Contact Us</h3></a>
      </div>
    </div>
    )
  }
}

export default ScrollingHeader
