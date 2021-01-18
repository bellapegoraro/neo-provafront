import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Routes from "./pages/routes/index";
import Message from "./components/message/index";
import { Container } from "./AppStyle";

const App = () => {
  return (
    <Container>
      <Header />
      <Message />
      <Routes />
      <Footer />
    </Container>
  );
};

export default App;
