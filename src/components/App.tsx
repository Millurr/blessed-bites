import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import { amber, blue, blueGrey, deepOrange, grey, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
    divider: blueGrey[200],
    text: {
        primary: pink[800],
        secondary: pink[800],
    },
    background: {
        default: grey[900],
        paper: grey[900],
    },
    secondary: pink,
    error: pink
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}