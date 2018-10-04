import React, { Component } from "react";
import ScrollingHeader from "../ScrollingHeader/ScrollingHeader";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Container4 from "../Container4/Container4";
import Container13 from "../Container13/Container13";
import Approach from "../Approach/Approach";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <ScrollingHeader />
        <Header />
        <About />
        <Services />
        <Approach />
        <Container4 />
        <Container13 />
      </div>
    );
  }
}

export default Index;
