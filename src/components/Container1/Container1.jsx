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
  justify-content: center;
`;

const Div = styled.div`
  background: ${props => props.img};
  background-size: cover;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Container1({ title, description, img }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Title white margin="0 0 0 1em">
          {title}
        </Title>
        <Text white>{description}</Text>
      </StyledColumn>
      <Div img={`url('${img}')`} />
    </Wrapper>
  );
}
