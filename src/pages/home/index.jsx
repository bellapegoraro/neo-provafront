import Card from "../../components/card/index";

const Home = ({ location }) => {
  console.log(location);
  return <Card location={location}></Card>;
};

export default Home;
