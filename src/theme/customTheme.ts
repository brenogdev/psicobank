import { createTheme } from "@mui/material";

export const customTheme = createTheme({
   palette: {
    primary: {
      main: "#2797BA",
      light: "#DDF2F8",
      dark: "#114655",
      contrastText: "#fff",     
    },
    secondary: {
      main: '#31405d',
      light: '#2c3a54',
      dark: "#27334a",
      contrastText: "#fff", 
    },
    success: {
      main: "#28A745",
      light: '#DEF7E4',
      dark: "#1C7330"
    },
    warning: {
      main: "#F4D400",
      light: '#FFFAD6',
      dark: "#CCB400"
    },
    error: {
      main: "#F44336",
      light: '#FEF2EC',
      dark: "#83171A"
    },
    info: {
      main: "#2196F3",
      light: '#ECF5FE',
      dark: "#042C4E"
    }
   },
   typography: {
    h1: {
      color: "#3D3D3D",
      fontSize: 24,
      fontWeight: 500,
    },
    h2: {
      color: "#3D3D3D",
      fontSize: 20,
      fontWeight: 500,
    }
   }
  });