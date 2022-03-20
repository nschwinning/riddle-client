import axios from "axios";
import {
    createContext,
    ReactNode,
    useContext,
    useReducer,
  } from "react";
import { SudokuState, EMPTY_GRID, SudokuContextHook } from "..";
import { BLOCK_COORDS, GRID, NUMBERS } from "../../typings";
import copyGrid from "../../util/copy-grid";
import reducer from "./reducer";
  
  // Initial State
  const initialState: SudokuState = { 
    workingGrid: EMPTY_GRID,
    challengeGrid: EMPTY_GRID,
    fullGrid: EMPTY_GRID,
    solved: false,
    sudokuId: '',
    riddleId: ''
}

const globalContext = createContext<{
    workingGrid: GRID,
    challengeGrid: GRID,
    fullGrid: GRID,
    solved: boolean,
    selectedBlock? : BLOCK_COORDS,
    clearGrid: () => void,
    createGrid: () => void,
    downloadFile: () => void,
    fillBlock: (n: NUMBERS, coords: BLOCK_COORDS) => void,
    selectBlock: (coords: BLOCK_COORDS) => void,
    solveGrid: () => void;
  }>({
    workingGrid: EMPTY_GRID,
    challengeGrid: EMPTY_GRID,
    fullGrid: EMPTY_GRID,
    solved: false,
    clearGrid: () => {},
    createGrid: () => {},
    downloadFile: () => {},
    fillBlock: () => {},
    selectBlock: () => {},
    solveGrid: () => {}
});

export const SudokuContextProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearGrid: () => void = () => {
      dispatch({
        type: 'RESET_SUDOKU'
      });
    }

    const createGrid: () => void = async () => {
      try {
        const res = await axios.get("http://localhost:8087/api/riddle?zeroes=60");

        let grid = res.data.grid as GRID;
        let challengeGrid = copyGrid(grid);
        let fullGrid = res.data.fullGrid as GRID;
        let sudokuId: string = res.data.sudokuId;
        let riddleId: string = res.data.riddleId;
  
        dispatch({
          type: 'CREATE_SUDOKU',
          payload: {grid, challengeGrid, fullGrid, sudokuId, riddleId}
        });
      } catch (err) {
        console.log("Error");
      }
    }

    const fillBlock = (n: NUMBERS, coords: BLOCK_COORDS): void => {
      let workingGrid = state.workingGrid;
      workingGrid![coords[0]][coords[1]] = n;

      dispatch({
          type: "FILL_BLOCK",
          payload: {grid: workingGrid}
      })
    }

    const selectBlock = (coords: BLOCK_COORDS): void => {
      dispatch({
          type: "SELECT_BLOCK",
          payload: coords
      })
    }

    const solveGrid: () => void = () => {
        dispatch({
          type: 'SOLVE_SUDOKU'
        });
    }

    const downloadFile: () => void = () => {

      const method = 'GET';
      const url = `http://localhost:8087/api/riddle/pdf/${state.riddleId}`;

      axios.request({
        url,
        method,
        responseType: 'blob',
      })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'file.pdf'); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
    }

    return (
      <globalContext.Provider
        value={{
          workingGrid: state.workingGrid,
          challengeGrid: state.challengeGrid,
          fullGrid: state.fullGrid,
          solved: state.solved,
          selectedBlock: state.selectedBlock,
          clearGrid,
          createGrid,
          downloadFile,
          fillBlock,
          selectBlock,
          solveGrid
        }}
      >
        {children}
      </globalContext.Provider>
    );
};

export const useSudokuContext: SudokuContextHook = () => {
    const { workingGrid, challengeGrid, fullGrid, solved, selectedBlock, clearGrid, createGrid, downloadFile, fillBlock, selectBlock, solveGrid } = useContext(globalContext);
    return { workingGrid, challengeGrid, fullGrid, solved, selectedBlock, clearGrid, createGrid, downloadFile, fillBlock, selectBlock, solveGrid };
};