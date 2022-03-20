import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';
import { Menubar, About, Home, Sudoku, Kakuro, Wordle } from './components';
import { SudokuContextProvider } from './context/sudoku';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <SudokuContextProvider>
          <Router>
            <Menubar />
            <Routes>
              <Route path="/about" element={<About/>}  />
              <Route path="/sudoku" element={<Sudoku/>}  />
              <Route path="/kakuro" element={<Kakuro/>} />
              <Route path="/wordle" element={<Wordle/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </Router>
        </SudokuContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
