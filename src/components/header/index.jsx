import Search from "../search/index";
import { Container, Inputs, Button } from "./style";
import { useLocation, useHistory } from "react-router-dom";
import Logo from "../logo/index";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Container>
      <Logo />
      <Inputs>
        <Button onClick={() => history.push("/pokedex")}>Seus pokemons</Button>
        {location.pathname === "/" && <Search />}
      </Inputs>
    </Container>
  );
};

export default Header;
