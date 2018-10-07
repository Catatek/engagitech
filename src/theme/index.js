import styled, { css } from "styled-components";

// TYPE

export const ContentTitle = styled.h2`
  font-size: 3.75em;
  font-weight: 600;
  font-family: "Intro Black", sans-serif;
  color: ${props => props.color || "#ec7673"};
  margin: ${props => (props.content1 ? "0 0 0 2.5em" : "0 2.5em 0 0")};
  @media (max-width: 700px) {
    margin: 0 1em;
    font-size: 2em;
  }
`;

export const Title = styled.h2`
  color: ${props => (props.white ? "#fff" : "#2b2b2b")};
  font-family: "Intro Black", sans-serif;
  font-size: 2.5em;
  margin: ${props => props.margin || "0"};
`;

export const Text = styled.p`
  color: ${props => (props.white ? "#fff" : "#2b2b2b")};
  font-size: 16px;
  font-family: "Intro Book", sans-serif;
  font-weight: 400;
  margin: ${props => props.margin || "0"};
  line-height: 2.4em;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 1.6em;
  }

  ${props =>
    props.large &&
    css`
      line-height: 1.8em;
      color: #fff;
      font-size: 48px;
      font-weight: 400;
    `};
  ${props =>
    props.title &&
    css`
      line-height: 1.8em;
      font-size: 26px;
      font-weight: 700;
      font-family: 'Intro Black'
      color: #fd6d6e;
      margin: .6em 0;
    `};
  ${props =>
    props.about &&
    css`
      font-size: 22px;
      color: #fff;
    `};
`;

// CONTAINERS

export const Row = styled.div`
  display: flex;
  width: ${props => props.width};
  margin: ${props => props.margin};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  position: relative;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  @media (max-width: 768px) {
    align-items: center;
  }
`;

// MISC

export const Line = styled.div`
  width: 136px;
  height: 14px;
  border-radius: 3px;
  position: absolute;
  bottom: ${props => props.bottom};
  @media (max-width: 768px) {
    display: none;
  }

  ${props =>
    props.primary &&
    css`
      left: 0;
      background-color: #ec7673;
    `};
  ${props =>
    props.secondary &&
    css`
      left: 0;
      background-color: #fff;
    `};
`;
