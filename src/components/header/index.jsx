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
        {location.pathname === "/" && (
          <>
            <Button onClick={() => history.push("/pokedex")}>
              Your pokemons
            </Button>
            <Search />
          </>
        )}
        {location.pathname === "/pokedex" && (
          <Button onClick={() => history.push("/")}>Home</Button>
        )}
      </Inputs>
    </Container>
  );
};

export default Header;
