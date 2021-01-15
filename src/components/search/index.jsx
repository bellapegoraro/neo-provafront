import { Container } from "./style";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const Search = () => {
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
        placeholder="Pesquisar"
        inputProps={{ "aria-label": "search your pokemon" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Container>
  );
};

export default Search;
