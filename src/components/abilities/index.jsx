import axios from "axios";
import { useState, useEffect } from "react";

const Abilities = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [isMounted, setMounted] = useState(true);
  const loadData = async () => {
    const { data } = await axios.get(url);
    setResponse(data);
  };
  useEffect(() => {
    isMounted && loadData();
    return () => {
      return setMounted(false);
    };
  }, [response]);
  return <li>{response && response.effect_entries[1].short_effect}</li>;
};

export default Abilities;
