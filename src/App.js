import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Card from "./components/card/index";
import { Container } from "./AppStyle";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route path="/pokedex"></Route>
      </Switch>
      <Footer />
    </Container>
  );
};

export default App;
