import styled from "styled-components";

const Container = styled.div`
  background-color: #8d99ae;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 2px 5px 1px rgba(164, 164, 164, 0.75);

  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 550px) {
    width: 40%;
    justify-content: space-evenly;
  }
`;

const Button = styled.button`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: bold;
  color: white;
  border: none;
  height: 35px;
  border-radius: 10px;
  background-color: #8d99ae;
  border-bottom: 1px solid black;
  text-transform: uppercase;
  outline: none;

  :hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: #2b2d42;
  }
  @media (min-width: 600px) {
    width: 120px;
  }
`;

export { Container, Inputs, Button };
