import axios from "axios";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { EMPTY_WORDLE, WordleContextHook, WordleState } from "..";
import { BLOCK_COORDS, CHAR, NUMBERS, WORDLE_CHAR, WORDLE_COORDS, WORDLE_GRID } from "../../typings";
import reducer from "./reducer";

// Initial State
const initialState: WordleState = {
  workingGrid: EMPTY_WORDLE,
  word: "",
  selectedBlock: [0,0],
  solved: false,
};

const globalContext = createContext<{
  workingGrid: WORDLE_GRID;
  word: string;
  solved: boolean;
  selectedBlock: WORDLE_COORDS;
  createWordle: () => void;
  fillBlock: (c: CHAR) => void;
}>({
  workingGrid: EMPTY_WORDLE,
  word: "",
  selectedBlock: [0,0],
  solved: false,
  createWordle: () => {},
  fillBlock: () => {},
});

export const WordleContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createWordle: () => void = async () => {
    try {
      const res = await axios.get("http://localhost:8084/api/word");

      let word = res.data.word;

      dispatch({
        type: 'CREATE_WORDLE',
        payload: {word}
      });
    } catch (err) {
      console.log("Error");
    }
  };

  const fillBlock = (c: CHAR): void => {
    let workingGrid = state.workingGrid;
    let selectedBlock = state.selectedBlock;

    console.log('Schmurgs');

    if (selectedBlock[1] < 4) {
        workingGrid[selectedBlock[0]][selectedBlock[1]] = c;
        let index = selectedBlock[1] + 1 as WORDLE_CHAR; 
        selectedBlock[1] = index;

        console.log('Urgs');

        dispatch({
            type: 'FILL_BLOCK',
            payload: {workingGrid, selectedBlock}
        });
    }
  };

  return (
    <globalContext.Provider
      value={{
        workingGrid: state.workingGrid,
        word: state.word,
        solved: state.solved,
        selectedBlock: state.selectedBlock,
        createWordle,
        fillBlock,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useWordleContext: WordleContextHook = () => {
    const { workingGrid, word, solved, selectedBlock, createWordle, fillBlock } = useContext(globalContext);
    return { workingGrid, word, solved, selectedBlock, createWordle, fillBlock };
};
