// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Custom primary color
      contrastText: '#ffffff', // Custom text color for contrast
    },
    secondary: {
      main: '#E74C3C', // Custom secondary color
      contrastText: '#ffffff', // Custom text color for contrast
    },
    background: {
      default: '#ECF0F1', // Custom default background color
      paper: '#ffffff', // Custom paper background color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Custom font family
    h1: {
      fontSize: '2.5rem', // Custom heading 1 font size
      fontWeight: 'bold', // Custom heading 1 font weight
      color: '#2C3E50', // Custom heading 1 color
    },
    h2: {
      fontSize: '2rem', // Custom heading 2 font size
      fontWeight: 'bold', // Custom heading 2 font weight
      color: '#E74C3C', // Custom heading 2 color
    },
    body1: {
      fontSize: '1rem', // Custom body text font size
      lineHeight: 1.5, // Custom line height for body text
      color: '#34495E', // Custom body text color
    },
  },
});

export default theme;
