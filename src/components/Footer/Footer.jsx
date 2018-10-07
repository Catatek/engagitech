import React, { Component } from "react";
import styles from "./Footer.css";

class Container13 extends Component {
  handleClick = e => {
    e.preventDefault();
    window.Intercom("showNewMessage");
  };
  render() {
    return (
      <div className="Container13">
        <div className="bookNow" onClick={this.handleClick}>
          <h2>Contact us</h2>
        </div>
      </div>
    );
  }
}

export default Container13;
