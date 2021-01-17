import { Container } from "./style";

const Notification = ({ added, error }) => {
  return (
    <Container>
      {added && "Pokemon captured!"}
      {added === false && error === null ? "Pokemon released!" : null}
      {error && "Oops! Looks like it is not a Pokemon"}
    </Container>
  );
};

export default Notification;
