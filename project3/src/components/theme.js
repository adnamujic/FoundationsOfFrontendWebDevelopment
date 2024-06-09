// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'mistyrose',
    },
    secondary: {
      main: 'rosybrown',
    },
  },
  typography: {
    fontFamily: 'Roboto', 
  },
});

export default theme;
