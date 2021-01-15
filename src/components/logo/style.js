import styled from "styled-components";

const Container = styled.div`
  margin-top: -5px;
  @media (min-width: 600px) {
    width: 30%;
  }
`;

const Text = styled.h1`
  font-size: 40px;
  font-family: "East Sea Dokdo", cursive;
  @media (min-width: 600px) {
    font-size: 60px;
  }
`;

export { Container, Text };
