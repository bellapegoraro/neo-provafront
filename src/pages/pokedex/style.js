import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export { Container };
