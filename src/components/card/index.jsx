import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Evolution from "../evolution/index";
import Types from "../types/index";
import Abilities from "../abilities/index";
import {
  addPokemonThunk,
  removePokemonThunk,
} from "../../store/modules/Pokedex/thunk";
import { Container, Name, Image, Title, Elements, List, Button } from "./style";

const Character = ({ location }) => {
  const [types, setTypes] = useState(false);
  const [abilities, setAbilities] = useState(false);
  const character = useSelector((state) => state.pokemons);
  const favorites = useSelector((state) => state.pokedex);
  console.log(favorites);
  const dispatch = useDispatch();
  return (
    <>
      {location.pathname === "/" &&
        character.map((character, index) => (
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
            <Elements hover={true} onClick={() => setTypes(!types)}>
              <Title>Type: </Title>
              {character.types.map((stats) => stats.type.name)}
              {types && (
                <>
                  <br />
                  <Title>Same type Pokemons</Title>{" "}
                  <Types url={character.types[0].type.url} />{" "}
                </>
              )}
            </Elements>
            <Elements>
              <Title>Abilities:</Title>

              {character.abilities.map((stats) => (
                <>
                  {console.log(abilities)}
                  <List onClick={() => setAbilities(!abilities)}>
                    {stats.ability.name}
                  </List>
                  {abilities && <Abilities url={stats.ability.url} />}
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

            <Button onClick={() => dispatch(addPokemonThunk(character))}>
              Catch!
            </Button>
          </Container>
        ))}
      {location.pathname === "/pokedex" &&
        favorites.map((character, index) => (
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
            <Elements hover={true} onClick={() => setTypes(!types)}>
              <Title>Type: </Title>
              {character.types.map((stats) => stats.type.name)}
              {types && (
                <>
                  <br />
                  <Title>Same type Pokemons</Title>{" "}
                  <Types url={character.types[0].type.url} />{" "}
                </>
              )}
            </Elements>
            <Elements>
              <Title>Abilities:</Title>

              {character.abilities.map((stats) => (
                <>
                  {console.log(abilities)}
                  <List onClick={() => setAbilities(!abilities)}>
                    {stats.ability.name}
                  </List>
                  {abilities && <Abilities url={stats.ability.url} />}
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

            <Button
              onClick={() =>
                dispatch(removePokemonThunk(character.species.name))
              }
            >
              Realease!
            </Button>
          </Container>
        ))}
    </>
  );
};

export default Character;
