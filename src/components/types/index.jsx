import axios from "axios";
import { useEffect, useState } from "react";

const Types = ({ url }) => {
  const [types, setTypes] = useState([]);
  const [isMounted, setMounted] = useState(true);

  const loadData = async () => {
    await axios.get(url).then((res) => setTypes(res.data.pokemon));
  };

  useEffect(() => {
    isMounted && loadData();
    return () => {
      return setMounted(false);
    };
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
