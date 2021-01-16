import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  margin: 20px auto;
  margin-bottom: 70px;
  background-color: #d90429;
  color: white;
  font-family: "Barlow Semi Condensed", sans-serif;
  box-shadow: 5px 7px 5px -2px rgba(153, 153, 153, 0.75);
`;

const Name = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  font-family: "East Sea Dokdo", cursive;
`;

const Image = styled.img`
  width: 120px;
  height: 130px;
`;

const Title = styled.span`
  font-weight: bolder;
`;

const Elements = styled.div`
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  border: 2px dotted white;
  background-color: #ef233c;
  padding: 10px;
  :hover {
    cursor: ${(props) => props.hover && "pointer"};
    transition: ${(props) => props.hover && "all 0.3s"};
    background-color: ${(props) => props.hover && "#d90429"};
    padding: ${(props) => props.hover && "15px"};
  }
`;

const List = styled.li`
  font-weight: bolder;
  :hover {
    cursor: pointer;
    transition: all 0.3s;
    background-color: #d90429;
    padding: 10px;
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
  margin-top: 10px;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: #2b2d42;
  }
`;

export { Container, Name, Image, Title, Elements, List, Button };
