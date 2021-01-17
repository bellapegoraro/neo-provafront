import { Container, Button } from "./style";
import { useState } from "react";

const Message = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <Container>
        Hello, here you're gonna find your favorites Pokemons! Just type the
        name and to click the button, and it will show up. And it gets more
        exciting! You can catch it! And will be save in your Pokedex, you can
        release it too, so they can be free in the wild! Make yourself
        confortable and let's go!
        <Button onClick={() => setOpen(false)}>Got it!</Button>
      </Container>
    )
  );
};

export default Message;
