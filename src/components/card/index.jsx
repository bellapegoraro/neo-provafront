import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Evolution from "../evolution/index";
import Types from "../types/index";
import Notification from "../notification/index";
import Abilities from "../abilities/index";
import {
  addPokemonThunk,
  removePokemonThunk,
} from "../../store/modules/Pokedex/thunk";
import {
  Container,
  Name,
  Image,
  Title,
  Elements,
  List,
  Button,
  Input,
} from "./style";

const Character = ({ location }) => {
  const [types, setTypes] = useState(false);
  const [abilities, setAbilities] = useState(false);
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [name, setName] = useState(null);
  const character = useSelector((state) => state.pokemons);
  const favorites = useSelector((state) => state.pokedex);
  const dispatch = useDispatch();

  const handleChange = (e, name) => {
    const filter = favorites.filter(
      (character) => character.species.name === name
    );
    setName(filter);
    const picture = e.target.files[0];
    const src = URL.createObjectURL(picture);
    setNewImage(src);
  };

  if (open === true) {
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }
  return (
    <>
      {open && <Notification added={added} />}
      {location.pathname === "/" &&
        character.map((character, index) => (
          <Container key={index}>
            <Name>{character.species.name}</Name>
            <Image alt="pokemon" src={character.sprites.front_default} />
            <Button
              onClick={() => {
                dispatch(addPokemonThunk(character));
                setOpen(true);
                setAdded(true);
              }}
            >
              Catch!
            </Button>
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
          </Container>
        ))}

      {location.pathname === "/pokedex" &&
        favorites.map((character, index) => (
          <Container key={index}>
            <Name>{character.species.name}</Name>

            {newImage && name[0].species.name === character.species.name ? (
              <Image alt="pokemon" src={newImage} />
            ) : (
              <Image alt="pokemon" src={character.sprites.front_default} />
            )}
            <Input
              type="file"
              id="imagem"
              onChange={(e) => handleChange(e, character.species.name)}
            />
            <Button
              onClick={() => {
                dispatch(removePokemonThunk(character.species.name));
                setOpen(true);
                setAdded(false);
              }}
            >
              Realease!
            </Button>
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
          </Container>
        ))}
    </>
  );
};

export default Character;
