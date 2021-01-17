import { Container } from "./style";

const Notification = ({ added, error }) => {
  return (
    <Container>
      {added && "Pokemon captured!"}
      {added === false && error === undefined ? "Pokemon released!" : null}
      {error && "Oops! Looks like it's not a Pokemon"}
    </Container>
  );
};

export default Notification;
