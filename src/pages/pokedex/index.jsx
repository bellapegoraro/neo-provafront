import Card from "../../components/card/index";
import { Container } from "./style";
const Pokedex = ({ location }) => {
  return (
    <Container>
      <Card location={location}></Card>
    </Container>
  );
};

export default Pokedex;
