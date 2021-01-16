import { useSelector } from "react-redux";
import Evolution from "../evolution/index";
import Types from "../types/index";
import Abilities from "../abilities/index";

const Character = () => {
  const character = useSelector((state) => state.pokemons);

  return (
    <div>
      {character.map((character, index) => (
        <div key={index}>
          <img alt="pokemon" src={character.sprites.front_default} />
          <p>{character.species.name}</p>
          <p>{character.height}</p>
          <p>{character.weight}</p>
          <p>{character.types.map((stats) => stats.type.name)}</p>
          <p>
            {character.abilities.map((stats) => (
              <>
                <p>
                  <Abilities url={stats.ability.url} />
                </p>
                <li>{stats.ability.name}</li>
              </>
            ))}
          </p>

          <p>
            {character.stats[0].stat.name}: {character.stats[0].base_stat}
          </p>
          <p>
            {character.stats[1].stat.name}: {character.stats[1].base_stat}
          </p>
          <p>
            {character.stats[2].stat.name}: {character.stats[2].base_stat}
          </p>
          <p>
            {character.stats[5].stat.name}: {character.stats[5].base_stat}
          </p>
          <p>
            {" "}
            <Evolution url={character.species.url} />
          </p>
          <p>{/* <Types url={character.types[0].type.url} /> */}</p>
        </div>
      ))}
    </div>
  );
};

export default Character;
