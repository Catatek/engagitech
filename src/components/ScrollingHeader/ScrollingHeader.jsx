import React, { Component } from "react";
import Logo from "../../Assets/engagitechLogo.png";
import Mobilelogo from "../../Assets/favicon.png";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  z-index: 10;
  @media (max-width: 480px) {
    width: 99%;
    overflow: hidden;
    margin: 0;
    justify-content: flex-end;
  }
`;

const RegularLogo = styled.img`
  width: 236px;
  height: 32px;
  margin-left: 1em;
  order: 0;
  position: relative;
  right: 25em;
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  visibility: hidden;
  @media (max-width: 480px) {
    position: relative;
    right: 0.9em;
    width: 50px;
    height: 50px;
    justify-content: flex-start;
    visibility: visible;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledTitle = styled.h4`
  color: #ffffff;
  font-family: "Core Circus", sans-serif;
  margin-right: 2em;
  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 0;
  }
`;

const A = styled.a`
  color: rgba(0, 0, 0, 1);
`;

const ContactUsDiv = styled.div`
  background-color: rgba(253, 111, 110, 0.7);
  height: 100%;
  font-family: "Core Circus", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 2em;
  cursor: pointer;
  @media (max-width: 480px) {
    padding: 0 1em;
  }
`;

const H3 = styled.h3`
  @media (max-width: 480px) {
    font-size: 0.8em;
    margin: 0;
  }
`;

class ScrollingHeader extends Component {
  handleClick = e => {
    e.preventDefault();
    window.Intercom("showNewMessage");
  };
  render() {
    return (
      <Wrapper>
        <MobileLogo src={Mobilelogo} alt="Engagitech Logo" />
        <RegularLogo src={Logo} alt="Engagitech Logo" />
        <ContactInfo>
          <A href="tel:833.736.4243">
            <StyledTitle>833.736.4243</StyledTitle>
          </A>
          <ContactUsDiv onClick={this.handleClick}>
            <H3>Contact Us</H3>
          </ContactUsDiv>
        </ContactInfo>
      </Wrapper>
    );
  }
}

export default ScrollingHeader;
