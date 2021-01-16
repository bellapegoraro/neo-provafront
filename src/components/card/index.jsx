import { useSelector, useDispatch } from "react-redux";
import Evolution from "../evolution/index";
import Types from "../types/index";
import Abilities from "../abilities/index";
import { addPokemonThunk } from "../../store/modules/Pokedex/thunk";
import { Container, Name, Image, Title, Elements, List, Button } from "./style";

const Character = () => {
  const character = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  return (
    <>
      {character.map((character, index) => (
        <Container key={index}>
          <Name>{character.species.name}</Name>
          <Image alt="pokemon" src={character.sprites.front_default} />

          <Elements>
            <Title>Height: </Title> {character.height}
          </Elements>
          <Elements>
            {" "}
            <Title>Weight: </Title> {character.weight}
          </Elements>
          <Elements>
            <Title>Type: </Title>
            {character.types.map((stats) => stats.type.name)}
          </Elements>
          <Elements>
            <Title>Abilities:</Title>

            {character.abilities.map((stats) => (
              <>
                <List>{stats.ability.name}</List>
                <Abilities url={stats.ability.url} />
              </>
            ))}
          </Elements>
          <Elements>
            <Title>HP: </Title> {character.stats[0].base_stat}
          </Elements>
          <Elements>
            <Title>Attack: </Title> {character.stats[1].base_stat}
          </Elements>
          <Elements>
            <Title>Defence: </Title> {character.stats[2].base_stat}
          </Elements>
          <Elements>
            <Title>Speed: </Title> {character.stats[5].base_stat}
          </Elements>
          <Elements>
            <Title>Evolutions:</Title>
            <Evolution url={character.species.url} />
          </Elements>
          {/* <Elements>{/* <Types url={character.types[0].type.url} /> */}
          <Button onClick={() => dispatch(addPokemonThunk(character))}>
            Catch!
          </Button>
        </Container>
      ))}
    </>
  );
};

export default Character;
