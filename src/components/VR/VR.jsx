import React, { Component } from 'react'
import styles from './VR.css'
import Globe from '../../Assets/vrGlobe.png'

class VR extends Component {
  render () {
    return <div className='VR'>
      <img src={Globe} alt="VR Glove" />
    </div>
  }
}

export default VR
