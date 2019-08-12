import React, { useState } from "react";
import { searchYoutube } from './functions';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    width: "70%",
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
    backgroundColor: fade(theme.palette.secondary.light, 0.8),
  },
}))

export default function Search({ setVideos }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  function handleEnter(e) {
    if (e.key === "Enter") handleSearch()
  }

  async function handleSearch() {
    const videos = await searchYoutube(inputValue);
    console.log(videos)
    setVideos(videos.items)
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