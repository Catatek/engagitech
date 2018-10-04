import React from "react";
import styled from "styled-components";
import { Column, Text, Row, Line, ContentTitle } from "../../theme/index";

const Wrapper = styled.div`
  padding: 4em 0;
  background-color: #fff;
  height: 100%;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
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

const Square = styled.div`
  width: 250px;
  height: 250px;
  background-color: #f6f6f6;
`;

function StyledColumn({ title, description }) {
  return (
    <Column alignitems="center" width="30%" margin="0 1em">
      <Square />
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
          description=" We look at digital marketing from a full-picture perspective. We start by performing a marketing analysis report that outlines key metrics such as customer satisfaction scores, online visibility, accurate listings of your business, SEO ratings, strength of brand, and ease of accessibility."
        />
        <StyledColumn
          title="Strategy"
          description=" Once we have an analysis, we’ll begin strategizing on the best
          solutions to address the most critical areas within the business.
          We’ll provide an easy and clear solution on how to improve those
          areas. Then we’ll create an implementation plan to execute."
        />
        <StyledColumn
          title="Execution"
          description=" The final stage in our process is implementation. We’ll build out a roll out plan to equip the organization with the tools it needs to get the results necessary for growth."
        />
      </StyledRow>
    </Wrapper>
  );
}
