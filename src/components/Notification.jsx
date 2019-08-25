import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { StateContext } from '../App';
import { set_notification } from './store/actions';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { green, amber } from '@material-ui/core/colors';
import clsx from 'clsx';

const styles = makeStyles(theme => ({
  closeIcon: {
    color: theme.palette.common.white,
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
}))

export default function Notification({ message, variant, className }) {
  const [state, dispatch] = useContext(StateContext);
  const { notification } = state.ui;
  const classes = styles();
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={notification.isActive}
        onClose={() => set_notification(false, dispatch)}
        message={<span>{message}</span>}
        ContentProps={{ className: clsx(classes[variant], className) }}
        autoHideDuration={3000}
        action={<IconButton className={classes.closeIcon}>
          <Close />
        </IconButton>}
      />
    </div>
  );
}
