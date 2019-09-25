import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue, grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: orange,
    customOrange: {
      main: '#d27d18',
      hover: '#d29b5a'
    },
    customDarkBlue: {
      main: 'rgb(66, 71, 88)',
      hover: 'rgb(66, 71, 88)'
    }
  },
  status: {
    danger: 'orange',
  },
});