import { Container } from "./style";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch } from "react-redux";
import { getPokemonThunk } from "../../store/modules/Character/thunk";
import { useState } from "react";
import Notification from "../notification/index";

const Search = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getPokemonThunk(input, setError, setOpen));
    setInput("");
  };

  if (error === true) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  const useStyles = makeStyles((theme) => ({
    iconButton: {
      padding: 10,
    },
  }));

  const classes = useStyles();

  return (
    <>
      {open && <Notification error={error} />}
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
      </Container>
    </>
  );
};

export default Search;
