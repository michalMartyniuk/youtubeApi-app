import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { DialogTitle, DialogContent, DialogActions } from './Components';
import { StateContext } from '../../App';
import { set_dialog_state } from '../../store/actions';

export default function CustomDialog () {
  const [state, dispatch] = useContext(StateContext);
  const { dialog_state } = state.ui;

  return (
    <div>
      <Dialog onClose={() => set_dialog_state(false, dispatch)} aria-labelledby="customized-dialog-title" open={dialog_state}>
        <DialogTitle id="customized-dialog-title" onClose={() => set_dialog_state(false, dispatch)}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
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
