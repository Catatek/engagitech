import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 70vh;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 48px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  line-height: 1.8em;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 1.6em;
  }
`;

const StyledRow = styled.div`
display: flex;
  margin: 2em auto;
  width: 60%;
  @media (max-width: 768px) {
   width: 95%;
   margin: 2em 0;
   justify-content: center;
`;

const Services = () => (
  <Wrapper>
    <StyledRow>
      <div>
        <Text>Our services</Text>
        <Text>Digital Advertising</Text>
        <Text>Creative Services</Text>
        <Text>Lead Generation</Text>
        <Text>SEO</Text>
        <Text>Social Media Management</Text>
        <Text>Business Consulting</Text>
        <Text>Web Development</Text>
        <Text>Website Design</Text>
        <Text>Workflow Automation</Text>
      </div>
    </StyledRow>
  </Wrapper>
);

export default Services;
