import React, { Component } from "react";
import styles from "./Container1.css";

class Container1 extends Component {
  render() {
    return (
      <div className="Container1" id="container1Id">
        <p>
          <span id="engagitechId" className="introHeader">
            Engagitech
          </span>
          is a full service digital marketing agency committed to partnering
          with companies who see digital advertising as a powerful medium for
          expanding their brand equity and revenue.
        </p>
        <p>
          We use our expertise to strategically increase customer acquisition,
          through engaging content and automated work flows.
        </p>
      </div>
    );
  }
}

export default Container1;