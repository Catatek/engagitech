import React, { Component } from 'react'
import styles from './Container13.css'
import Logo from '../../Assets/engagitechLogo.png'

class Container13 extends Component {
  render () {
    return (
    <div className='Container13'>
      <div className="bookNow">
        <h2>Book Now</h2>
      </div>
      <div className="footerLogo">
        <img src={Logo} alt="Engagitech Logo"/>
      </div>
      <div className="container13Row">
        <div className="socialMedia">
          <h3>Connect with us</h3>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    )
  }
}

export default Container13
