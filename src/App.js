import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Routes from "./pages/routes/index";
import Message from "./components/message/index";
import { Container } from "./AppStyle";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <Container>
      <Header />
      <Message />
      <Routes location={location} />
      <Footer />
    </Container>
  );
};

export default App;
