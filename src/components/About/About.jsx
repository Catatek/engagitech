import React, { Component } from "react";
import styled from "styled-components";
import { Text } from "../../theme/index";

const Wrapper = styled.div`
  height: 70vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 535px) {
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Div = styled.div`
  width: 75%;
  @media screen and (max-width: 535px) {
    width: 95%;
  }
`;

const Span = styled.span`
  font-family: "Core Circus", sans-serif;
  color: #fd6d6e;
  font-size: 1.8em;
  text-transform: uppercase;
  @media screen and (max-width: 535px) {
    .introHeader {
      font-family: "Core Circus", sans-serif;
      color: #fd6d6e;
      font-size: 1.5em;
      text-transform: uppercase;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Div>
          <Text about>
            <Span>Engagitech</Span>
            is a full service digital marketing agency committed to partnering
            with companies who see digital advertising as a powerful medium for
            expanding their brand equity and revenue.
          </Text>
          <Text about>
            We use our expertise to strategically increase customer acquisition,
            through engaging content and automated work flows.
          </Text>
        </Div>
      </Wrapper>
    );
  }
}

export default About;
