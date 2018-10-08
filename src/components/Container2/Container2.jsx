import React, { Component } from "react";
import styled from "styled-components";
import { Column, Title, Text } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 90vh;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  background-color: #fff;
  justify-content: center;
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
    min-height: 500px;
  }
`;

export default function Container2({ title, description, img, bullets }) {
  return (
    <Wrapper>
      <Div img={`url('${img}')`} />
      <StyledColumn>
        <Title margin="0 0 0 1em">{title}</Title>
        <Column margin="1em 0 0 2.5em" width="80%">
          <Text>{description}</Text>
          <Column margin="1em 0 0 0">
            {bullets &&
              bullets.map((key, index) => {
                return (
                  <Text bullets key={index}>
                    {key}
                  </Text>
                );
              })}
          </Column>
        </Column>
      </StyledColumn>
    </Wrapper>
  );
}
