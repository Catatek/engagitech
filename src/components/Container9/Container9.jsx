import React, { Component } from 'react';
import styles from './Container9.css';
import Binary from '../../Assets/binary.png';

class Container9 extends Component {
  render() {
    return (
      <div className="Container9">
        <div className="container9Text">
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
        <div className="binary">
          <img className="binaryImage" src={Binary} alt="Binary Engagitech" />
        </div>
      </div>
    );
  }
}

export default Container9;
