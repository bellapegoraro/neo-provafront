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
  background-color: #fdcb6e;
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
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Elements = styled.div`
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  border: 2px dotted white;
  background-color: #b37c14;
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
  /* :hover {
    cursor: pointer;
    transition: all 0.3s;
    background-color: #d90429;
    padding: 10px;
  } */
`;

const Button = styled.button`
  border: none;
  outline: none;
  height: 30px;
  width: 100px;
  text-transform: uppercase;
  color: white;
  background-color: #0984e3;
  border-radius: 10px;
  margin-bottom: 10px;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: #74b9ff;
  }
`;

const Input = styled.input`
  color: transparent;
  padding-top: 7px;
  height: 40px;

  ::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }

  &:before {
    border: none;
    height: 40px;
    outline: none;
    padding: 10px;
    width: 100px;
    text-transform: uppercase;
    color: white;
    background-color: #8d99ae;
    border-radius: 10px;
    font-weight: bolder;
    content: "Escolha um arquivo";
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 10px;
    outline: none;
    text-align: center;
    margin-left: 22%;
  }
`;

export { Container, Name, Image, Title, Elements, List, Button, Input };
