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
      <Inputs data-testid="testDiv">
        {location.pathname === "/" && (
          <>
            <Button
              data-testid="testButton"
              onClick={() => history.push("/pokedex")}
            >
              Your pokemons
            </Button>
            <Search data-testid="testSearch" />
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
