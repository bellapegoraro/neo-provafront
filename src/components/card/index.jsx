import { useSelector } from "react-redux";

const Character = () => {
  const character = useSelector((state) => state.pokemons);
  return (
    <div>
      {character.map((character, index) => (
        <span key={index}>{character.species.name}</span>
      ))}
    </div>
  );
};

export default Character;
