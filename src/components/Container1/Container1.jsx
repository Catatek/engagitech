import React, { Component } from "react";
import styled from "styled-components";
import { Column, Title, Text } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  background-color: #2b2b2b;
  width: 100%;
`;

const StyledColumn = styled(Column)`
  width: 50%;
  padding: 0 2em;
  justify-content: center;
`;

const Div = styled.div`
  background-image: url("../../../Assets/hashtagParty.jpg");
  background-size: cover;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Container1() {
  return (
    <Wrapper>
      <StyledColumn>
        <Title>HASHTAG PRINTING</Title>
        <Text white />
      </StyledColumn>
      <Div />
    </Wrapper>
  );
}
