import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coins from './pages/Coins';
import Header from './components/Header/Header';
import { createTheme, PaletteMode, makeStyles, Theme, createStyles } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// import { PaletteMode } from "@material-ui/core";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"; 

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark"
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app_container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coins />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
