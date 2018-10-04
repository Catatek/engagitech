import React, { Component } from "react";
import styled from "styled-components";
import { Column, Title, Text } from "../../theme/index";
import Hashtag from "../../Assets/hashtagParty.jpg";

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  background-color: #2b2b2b;
  width: 100%;
`;

const StyledColumn = styled(Column)`
  width: 50%;

  justify-content: center;
`;

const Div = styled.div`
  background: url('${Hashtag}');
  background-size: cover;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Container2({ title, description }) {
  return (
    <Wrapper>
      <Div />
      <StyledColumn>
        <Title>{title}</Title>
        <Text white>{description}</Text>
      </StyledColumn>
    </Wrapper>
  );
}
