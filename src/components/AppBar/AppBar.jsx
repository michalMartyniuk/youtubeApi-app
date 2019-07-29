import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchInput } from './SearchInput';
import { useStyles } from './styles';

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant="regular">
            <IconButton
                classes={{ colorPrimary: classes.iconButton }}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
                Material-UI
            </Typography>
            <SearchInput classes={classes}/>
           </Toolbar>
        </AppBar>
    </div>
  );
}
