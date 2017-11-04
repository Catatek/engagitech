import React, { Component } from 'react';
import styles from './Container9.css';
import binary from '../../Assets/binary.png';

class Container9 extends Component {
  render() {
    return (
      <div className="Container9">
        <div className="container9Text" id="container9Id">
          <h2>Data for days</h2>
          <p>
            Our Data Capture capabilities range far and wide.  Don’t let your audience’s contact information slip
            through.
          </p>
          <p>
            Engage them using our interactive media solutions, and keep in touch with them by using  our technology to
            capture their names, emails, address, social media handles, demographics, and more.
          </p>
          <h3>
            (P.S. those numbers spell our name in binary… <br />  that’s how thorough we are.)
          </h3>
        </div>
        <img className="binaryImage" src={binary} alt="Binary Engagitech" />
      </div>
    );
  }
}

export default Container9;
