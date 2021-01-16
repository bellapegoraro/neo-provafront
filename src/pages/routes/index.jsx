import { Route, Switch } from "react-router-dom";
import Pokedex from "../pokedex/index";
import Home from "../home/index";

const Routes = ({ location }) => {
  console.log(location);

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
