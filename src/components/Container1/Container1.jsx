import React, { Component } from "react";
import styled from "styled-components";
import { Column, Title, Text } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 90vh;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  justify-content: center;
  background-color: #2b2b2b;
  padding: 2em 0;
  @media (max-width: 800px) {
    width: 100%;
    padding: 4em 0;
  }
`;

const Div = styled.div`
  background: ${props => props.img};
  background-size: cover;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    min-height: 550px;
  }
`;

export default function Container1({ title, description, img, bullets }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Title white margin="0 0 0 1em">
          {title}
        </Title>
        <Column margin="1em 0 0 2.5em" width="80%">
          <Text white>{description}</Text>
          <Column margin="1em 0 0 0">
            {bullets &&
              bullets.map((key, index) => {
                return (
                  <Text bullets white key={index}>
                    {key}
                  </Text>
                );
              })}
          </Column>
        </Column>
      </StyledColumn>
      <Div img={`url('${img}')`} />
    </Wrapper>
  );
}
