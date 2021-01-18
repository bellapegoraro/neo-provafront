import { Route, Switch } from "react-router-dom";
import Pokedex from "../pokedex/index";
import Home from "../home/index";
import { useLocation } from "react-router-dom";

const Routes = () => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/">
        <Home location={location} />
      </Route>
      <Route path="/pokedex">
        <Pokedex location={location} />
      </Route>
    </Switch>
  );
};

export default Routes;
