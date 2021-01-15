import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Card from "./components/card/index";
import { Container } from "./AppStyle";
const App = () => {
  return (
    <Container>
      <Header />
      <Card />
      <Footer />
    </Container>
  );
};

export default App;
