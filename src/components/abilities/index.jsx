import axios from "axios";
import { useState, useEffect } from "react";

const Abilities = ({ url }) => {
  const [response, setResponse] = useState(null);
  const loadData = async () => {
    const data = await axios.get(url);
    setResponse(data.data);
  };
  useEffect(() => {
    loadData();
  }, [response]);
  return <div>{response && response.effect_entries[1].short_effect}</div>;
};

export default Abilities;
