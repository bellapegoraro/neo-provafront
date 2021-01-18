import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  position: absolute;
`;

const Text = styled.div`
  height: 250px;
  font-size: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  width: 270px;
  height: 300px;
  margin: 20% auto;
  background-color: #ef233c;
  border-radius: 10px;
  font-family: "Barlow Semi Condensed", sans-serif;

  @media (min-width: 800px) {
    margin: 7% auto;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  height: 30px;
  width: 100px;
  text-transform: uppercase;
  color: white;
  background-color: #8d99ae;
  border-radius: 10px;
  margin-bottom: 10px;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: #2b2d42;
  }
`;

export { Container, Content, Text, Button };
