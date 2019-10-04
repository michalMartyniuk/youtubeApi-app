import React, { useContext } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from '../../App';
import { set_search_value, searchYT } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: 700,
    height: 85
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem"
  },
  search: {
    display: "flex",
    flex: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    color: theme.palette.common.black,
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    height: 50,
    width: "100%",
    fontSize: "2rem",
    color: 'inherit',
  },
  inputInput: {
    color: theme.palette.common.black,
    padding: theme.spacing(1, 1, 1, 7),
  },
}));

export default function HomeSearch() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  function handleEnter(e) {
    if (e.key === "Enter") searchYT(state.video.searchValue, dispatch)
  }
  return (
    <div className={classes.container}>
      <Typography className={classes.header} variant="h2">Search for youtube videos</Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={state.video.searchValue}
          onChange={(e) => set_search_value(e.target.value, dispatch)}
          onKeyPress={handleEnter}
        />
      </div>
    </div>
  );
}
