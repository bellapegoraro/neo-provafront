import axios from "axios";
import { useEffect, useState } from "react";

const Types = ({ url }) => {
  const [types, setTypes] = useState([]);

  const loadData = async () => {
    await axios.get(url).then((res) => setTypes(res.data.pokemon));
  };

  useEffect(() => {
    loadData();
  }, [url]);

  return (
    <ul>
      {types.map((name, index) => (
        <li key={index}>{name.pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Types;
