import styled from "styled-components";

const Container = styled.div`
  background-color: #8d99ae;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`;

const Button = styled.button`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #ef2330;
  text-transform: uppercase;
`;

export { Container, Inputs, Button };
