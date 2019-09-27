import React, { useState, useContext } from "react";
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from '../../App';
import { set_search_value, searchYT } from '../../store/actions';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    marginLeft: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
  },
  inputRoot: {
    flex: 1,
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 4),
  },
  button: {
    fontSize: "1.7rem",
    backgroundColor: theme.palette.customOrange.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover
    }
  },
}))

export default function Search() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  function handleEnter(e) {
    if (e.key === "Enter") searchYT(state.video.searchValue, dispatch)
  }

  return (
    <div className={classes.search}>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        type="text"
        value={state.video.searchValue}
        onChange={(e) => set_search_value(e.target.value, dispatch)}
        onKeyPress={handleEnter}
      />

      <Button
        variant="contained"
        className={classes.button}
        onClick={() => searchYT(state.video.searchValue, dispatch)}
      >
        <SearchIcon />
      </Button>
    </div>
  )
}