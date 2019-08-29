import { makeStyles } from '@material-ui/styles';
import { green, amber } from '@material-ui/core/colors';
export const styles = makeStyles( theme => ( {
  success: {
    backgroundColor: green[ 600 ],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[ 700 ],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing( 1 ),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
} ) )