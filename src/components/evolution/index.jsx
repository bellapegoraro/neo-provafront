import axios from "axios";
import { useState, useEffect } from "react";

const Evolution = ({ url }) => {
  const [response, setResponse] = useState(null);

  const loadData = async () => {
    const firstRequest = await axios.get(url);

    const secondRequest = await axios.get(
      firstRequest.data.evolution_chain.url
    );

    setResponse([secondRequest.data]);
  };

  useEffect(() => {
    loadData();
  }, [response]);

  return (
    <>
      {response &&
        response.map((stats) => (
          <div>{stats.chain.is_baby && stats.chain.species.name}</div>
        ))}
      {response &&
        response.map((stats) =>
          stats.chain.evolves_to.map((stats) => (
            <>
              <div>{stats.species?.name}</div>
              <div>{stats.evolves_to[0]?.species?.name}</div>
            </>
          ))
        )}
    </>
  );
};
export default Evolution;
