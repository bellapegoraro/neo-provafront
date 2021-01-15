import styled from "styled-components";

const Container = styled.div`
  background-color: #edf2f4;
  width: 240px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  padding-left: 5px;

  @media (min-width: 600px) {
    height: 35px;
    width: 300px;
    padding-left: 35px;
  }
`;

export { Container };
