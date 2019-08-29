import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
// import { DialogTitle, DialogContent, DialogActions } from './Components';
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { StateContext } from '../../App';
import { set_dialog_state } from '../../store/actions';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

export default function CustomDialog (props) {
  const [state, dispatch] = useContext(StateContext);
  const { dialog_state } = state.ui;
  const classes = styles();

  return (
    <div>
      <Dialog onClose={() => set_dialog_state(false, dispatch)} open={dialog_state}>
        <DialogTitle>
          {props.title}
          <IconButton
            className={classes.closeButton}
            aria-label="close"
            className={classes.closeButton}
            onClick={() => set_dialog_state(false, dispatch)}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {props.content}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => set_dialog_state(false, dispatch)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
