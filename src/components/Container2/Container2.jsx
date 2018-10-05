import React, { Component } from "react";
import styled from "styled-components";
import { Column, Title, Text } from "../../theme/index";
import Hashtag from "../../Assets/hashtagParty.jpg";

const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  background-color: #fff;
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

export default function Container2({ title, description, img }) {
  return (
    <Wrapper>
      <Div img={`url('${img}')`} />
      <StyledColumn>
        <Title margin="0 0 0 1em">{title}</Title>
        <Text>{description}</Text>
      </StyledColumn>
    </Wrapper>
  );
}
