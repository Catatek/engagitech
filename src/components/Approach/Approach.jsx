import React from "react";
import styled from "styled-components";
import { Column, Text, Row, Line, ContentTitle } from "../../theme/index";
import analyze from "../../Assets/analyze.svg";
import strategize from "../../Assets/strategize.svg";
import execute from "../../Assets/execute.svg";

const Wrapper = styled.div`
  padding: 4em 0;
  background-color: #fff;
  height: 100%;
`;

const StyledRow = styled(Row)`
  margin: 2.5em 0;
  padding: 2em 0;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Icon = styled.img`
  width: 150px;
  height: 150px;
  margin: 2em 0 4em 0;
`;

function StyledColumn({ title, description, img }) {
  return (
    <Column alignitems="center" width="25%" margin="0 1.5em">
      <Icon src={img} alt={`${img} Icon`} />
      <Text title>{title}</Text>
      <Text>{description}</Text>
    </Column>
  );
}

export default function Approach() {
  return (
    <Wrapper>
      <Row>
        <Line primary bottom="1.9em" />
        <ContentTitle content1>Approach</ContentTitle>
      </Row>
      <StyledRow>
        <StyledColumn
          title="Analysis"
          description="We look at digital marketing holistically. Starting with a marketing analysis report that outlines key metrics such as customer satisfaction scores, online visibility, accurate listings, SEO ratings,  and strength of the brand."
          img={analyze}
        />
        <StyledColumn
          title="Strategy"
          description="After analysis, we’ll strategize on the best solutions to address the most critical areas within the business. We’ll provide an easy and clear solution, then we’ll create an implementation plan to execute."
          img={strategize}
        />
        <StyledColumn
          title="Execution"
          description="Using our marketing platform, we’ll visually show the implementation and roll out process. This process can be easily pulled up using our Client Portal, and manage from one point of access to ensure a smooth roll out."
          img={execute}
        />
      </StyledRow>
    </Wrapper>
  );
}
