import styled from "styled-components";

const Container = styled.div`
  margin-top: -5px;
  @media (min-width: 600px) {
    width: 30%;
  }
`;

const Text = styled.h1`
  color: white;
  font-size: 40px;
  text-shadow: 4px 1px 2px rgba(0, 0, 0, 0.6);
  font-family: "East Sea Dokdo", cursive;
  @media (min-width: 600px) {
    font-size: 60px;
  }
`;

export { Container, Text };
