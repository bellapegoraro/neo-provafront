import Card from "../../components/card/index";
import Message from "../../components/message/index";

const Home = ({ location }) => {
  return (
    <>
      <Message />
      <Card location={location}></Card>
    </>
  );
};

export default Home;
