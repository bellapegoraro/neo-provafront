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
        response.map((stats, index) => (
          <div key={index}>
            {stats.chain.is_baby && stats.chain.species.name}
          </div>
        ))}
      {response &&
        response.map((stats) =>
          stats.chain.evolves_to.map((stats) => (
            <>
              <div key={stats.species?.name}>{stats.species?.name}</div>
              <div key={stats.evolves_to[0]?.species?.name}>
                {stats.evolves_to[0]?.species?.name}
              </div>
            </>
          ))
        )}
    </>
  );
};
export default Evolution;
