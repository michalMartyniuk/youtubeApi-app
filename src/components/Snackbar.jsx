import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function Notification(props) {
  const [open, toggle] = React.useState(props.open)
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={()=> toggle(false)}
        message={<span>{props.message}</span>}
      />
    </div>
  );
}
