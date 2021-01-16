import { Container } from "./style";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch } from "react-redux";
import { getPokemonThunk } from "../../store/modules/Character/thunk";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getPokemonThunk(input, setError));
    setInput("");
    setError(null);
  };

  const useStyles = makeStyles((theme) => ({
    iconButton: {
      padding: 10,
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search your pokemon" }}
        value={input}
        onChange={handleInput}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      {error && <span>erro</span>}
    </Container>
  );
};

export default Search;
