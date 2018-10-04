import React, { Component } from "react";
import ScrollingHeader from "../ScrollingHeader/ScrollingHeader";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Container1 from "../Container1/Container1";
import Container2 from "../Container2/Container2";
import Footer from "../Footer/Footer";
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
        <Container1 title="Digital Advertising" />
        <Container2 title="Digital Advertising" />
        <Footer />
      </div>
    );
  }
}

export default Index;
