import React, { useState, useContext } from "react";
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from '../../App';
import { searchYT } from '../store/actions';
import { useStyles } from './styles';

export default function Search() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  const [inputValue, setInputValue] = useState("nirvana");

  function handleEnter(e) {
    if (e.key === "Enter") searchYT(inputValue, dispatch)
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
        onClick={() => searchYT(inputValue, dispatch)}
      >
        <SearchIcon />
      </Button>
    </div>
  )
}