import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #0984e3;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Text = styled.span`
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  font-family: "Barlow Semi Condensed", sans-serif;
`;

export { Container, Text };
