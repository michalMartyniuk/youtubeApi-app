import React, { useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from '../../App';
import { set_search_value, searchYT } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(3)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
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
    color: 'inherit',
  },
  inputInput: {
    color: theme.palette.common.black,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 220,
      '&:focus': {
        width: 400,
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  function handleEnter(e) {
    if (e.key === "Enter") searchYT(state.video.searchValue, dispatch)
  }
  return (
    <div className={classes.root}>
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
          inputProps={{ 'aria-label': 'search' }}
          value={state.video.searchValue}
          onChange={(e) => set_search_value(e.target.value, dispatch)}
          onKeyPress={handleEnter}
        />
      </div>
    </div>
  );
}
