import React, { Component } from "react";
import ScrollingHeader from "../ScrollingHeader/ScrollingHeader";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Container1 from "../Container1/Container1";
import Container2 from "../Container2/Container2";
import Footer from "../Footer/Footer";
import Approach from "../Approach/Approach";
import digitalAd from "../../Assets/digitalAd.jpg";
import creativeServices from "../../Assets/creativeServices.jpg";
import leadGeneration from "../../Assets/leadGen.jpg";
import seo from "../../Assets/container11Background.jpg";
import socialMedia from "../../Assets/socialMedia.jpg";
import consulting from "../../Assets/consulting.jpg";
import automation from "../../Assets/automation.jpg";
import webDev from "../../Assets/webDev.jpg";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <ScrollingHeader />
        <Header />
        <About />
        <Services />
        <Approach />
        <Container1 title="Digital Advertising" img={digitalAd} />
        <Container2 title="Creative Services" img={creativeServices} />
        <Container1 title="Lead Generation" img={leadGeneration} />
        <Container2 title="SEO" img={seo} />
        <Container1 title="Social Media Management" img={socialMedia} />
        <Container2 title="Business Consulting" img={consulting} />
        <Container1 title="Web Development" img={webDev} />
        <Container2 title="Workflow Automation" img={automation} />
        <Footer />
      </div>
    );
  }
}

export default Index;
