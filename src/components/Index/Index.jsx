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

const bullet = {
  digital: [
    "Facebook & Instagram Advertisement",
    "Google Adwords & PPC Management",
    "Mobile Ad Creation using Geo-Targeting",
    "Access to our secure Client Portal, with Advertising Intelligence for Live Digital advertising reporting",
    "Email Marketing Campaigns"
  ],
  creative: [
    "Corporate Brand Identity",
    "Content Creation",
    "Marketing Brochures",
    "Blog Packages",
    "Instant Video Creation"
  ],
  lead: [
    "Email Marketing",
    "Click Funnels",
    "Pay Per Click Marketing",
    "Listing in Industry Specific Forums"
  ],
  seo: [
    "Quickly Increase Website Ranking",
    "Get top ranking on Key Phrases",
    "Be top ranking in your industry"
  ],
  social: [
    "Content Strategy",
    "Increase engagement",
    "Increase Audience Size",
    "Social Media Content Creation and Management",
    "Use our Software to manage all social media platforms from one platform."
  ],
  web: [
    "Responsive Web Design",
    "eCommerce / Online Store / Catalog",
    "Site Hosting",
    "Integrated Blog"
  ]
};

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <ScrollingHeader />
        <Header />
        <About />
        <Services />
        <Approach />
        <Container1
          title="Digital Advertising"
          img={digitalAd}
          description={
            "Let us segment your propspects by interests and preference, we’ll centralize interactions with them across multiple channels, like the web, email, mobile, and social. With Engagitech, you can leverage your segments in LinkedIn, Facebook, Google and other popular ad platforms to deliver more personal and effective display ads. Target the right customers with our personalized digital ads, and improve your ad spend with our Digital Advertising Tools."
          }
          bullets={bullet.digital}
        />
        <Container2
          title="Creative Services"
          img={creativeServices}
          description={
            "We work with our clients to ensure brand consistency across all marketing materials with our convenient branding package and platform. Impress customers and stand out from your competition with a fresh look and feel for your brand!"
          }
          bullets={bullet.creative}
        />
        <Container1
          title="Lead Generation"
          img={leadGeneration}
          bullets={bullet.lead}
          description={
            "Buyers make decisions before they ever interact with your sales team. Our Lead Management solution helps you attract buyers and nurture them with personalized campaigns, so sales can step in when they are engaged and ready."
          }
        />
        <Container2
          title="SEO"
          img={seo}
          bullets={bullet.seo}
          description={
            "The ability for your future clients to find and learn about what you offer is of paramount importance. 81% of people take their time to research products and services they are interested in before buying, this means whether you are running a local restaurant or a nationwide business, you need to be easy to find. Our products will help your business quickly increase Website Ranking, get top ranking on Key Phrases and be top ranking in your industry for Search Engine Optimization."
          }
        />
        <Container1
          title="Social Media Management"
          img={socialMedia}
          bullets={bullet.social}
          description={
            "Convert followers into new Clients. Just having a presence on social media is not enough. Let us help you create a robust Content Strategy in order to Increase engagement and Audience size. Our software will simplify your social media management and allow you to manage all platforms from one place. Need new content? Allow us to create and manage new content to keep you attracting and keep the interests of new and current clients."
          }
        />
        <Container2
          title="Business Consulting"
          img={consulting}
          description={
            "Our Business Consulting Services focus on our clients most critical issues and opportunities: strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, and sustainable growth. We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces."
          }
        />
        <Container1
          title="Web Development"
          img={webDev}
          bullets={bullet.web}
          description={
            "Own your online presence. A website should be an attractive and inviting place for clients to learn and interact with your business. Provide them all the information they need about your products or services while also encouraging them to make purchases or contact you directly. This will give your business opportunities for immediate sales or for a natural progression for you to move them along in the sales life-cycle."
          }
        />
        <Container2
          title="Workflow Automation"
          img={automation}
          description={
            "We build workflows to be automated in an effort to recover lost time and inefficient processes. It is collaboration on an entirely new level. Work flows from person to person, system to system, to the cloud and back without bottlenecks or breakdowns. Manual, time-consuming tasks transform into sophisticated processes that propel your business forward, so it can accomplish the things it’s meant to."
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Index;
