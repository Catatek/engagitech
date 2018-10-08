import React from "react";
import styled from "styled-components";
import { Text, Row, Line, ContentTitle } from "../../theme/index";

const Wrapper = styled.div`
  height: 100%;
  background-color: #2b2b2b;
  padding: 4em 0;
`;

const StyledRow = styled(Row)`
  margin: 2em auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 95%;
    margin: 2em 0;
    justify-content: center;
  }
`;

const Span = styled.span`
  color: #ec7673;
`;

const Services = () => (
  <Wrapper>
    <Row>
      <Line secondary bottom="1.5em" />
      <ContentTitle content1 color="#fff">
        Services
      </ContentTitle>
    </Row>
    <StyledRow>
      <div>
        <Text large>
          Digital Advertising <Span> + </Span>
          <br />
          Creative Services
          <Span> + </Span>
          <br />
          Lead Generation
          <Span> + </Span>
          <br />
          SEO
          <Span> + </Span>
          Social Media Management
          <Span> + </Span>
          <br />
          Business Consulting
          <Span> + </Span>
          Web Development
          <Span> + </Span>
          <br />
          Website Design
          <Span> + </Span>
          <br />
          Workflow Automation
        </Text>
      </div>
    </StyledRow>
  </Wrapper>
);

export default Services;
