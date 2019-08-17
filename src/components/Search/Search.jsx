import React, { useState, useContext } from "react";
import { searchYoutube } from './functions';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from '../../App';

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.2),
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
    backgroundColor: theme.palette.customOrange.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover
    }
  },
}))

export default function Search() {
  const classes = useStyles();
  const [state, setState] = useContext(StateContext);
  const [inputValue, setInputValue] = useState("");

  function handleEnter(e) {
    if (e.key === "Enter") handleSearch()
  }

  async function handleSearch() {
    const videos = await searchYoutube(inputValue);
    setState(state => ({
      ...state,
      video: {...state.video, items: videos.items}
    }))
  }
 
  return (
    <div className={classes.search}>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleEnter}
      />
      
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  )
}