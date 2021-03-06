import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { StateContext } from '../../App';
import { set_password_value, set_email_value, set_signUp_state, auth_sign_up } from '../../store/actions';

export default function SignUp() {
  const [state, dispatch] = useContext(StateContext);

  const handle_signUp = () => {
    auth_sign_up(state.auth.email_value, state.auth.password_value, dispatch)
    set_signUp_state(false, dispatch)
  }

  return (
    <div>
      <Dialog open={state.ui.signUp_state} onClose={() => set_signUp_state(false, dispatch)}>
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={(e) => set_email_value(e.target.value, dispatch)}
            value={state.auth.email_value}
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            onChange={(e) => set_password_value(e.target.value, dispatch)}
            value={state.auth.password_value}
            margin="dense"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => set_signUp_state(false, dispatch)} color="primary">
            Cancel
          </Button>
          <Button onClick={handle_signUp} color="primary">
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
