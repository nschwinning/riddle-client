import { BLOCK_COORDS, CHAR, GRID, NUMBERS, WORDLE_COORDS, WORDLE_GRID } from "../typings";

export const EMPTY_GRID: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const EXAMPLE_GRID: GRID = [
    [0, 0, 0, 3, 0, 1, 0, 7, 6],
    [4, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 4, 0, 0, 7],
    [8, 7, 6, 5, 0, 0, 0, 0, 0],
    [5, 0, 3, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 0, 4, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 1, 0],
  ]

export interface SudokuState {
    workingGrid: GRID,
    challengeGrid: GRID,
    fullGrid: GRID,
    selectedBlock?: BLOCK_COORDS,
    solved: boolean,
    sudokuId: string,
    riddleId: string;
}

export type SudokuActionTypes = 'CREATE_SUDOKU' | 'SOLVE_SUDOKU' | 'RESET_SUDOKU' | 'SELECT_BLOCK' | 'FILL_BLOCK' ;

export interface SudokuAction {
    type: SudokuActionTypes;
    payload?: any;
}

export type SudokuReducerType = (state: SudokuState, action: SudokuAction) => SudokuState;

export type SudokuContextHook = () => {
    workingGrid: GRID,
    challengeGrid: GRID,
    fullGrid: GRID,
    solved: boolean,
    selectedBlock?: BLOCK_COORDS,
    clearGrid: () => void,
    createGrid: () => void,
    downloadFile: () => void,
    fillBlock: (n: NUMBERS, coords: BLOCK_COORDS) => void,
    selectBlock: (coords: BLOCK_COORDS) => void,
    solveGrid: () => void;
}

//Wordle Context

export const EMPTY_WORDLE: WORDLE_GRID = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

export interface WordleState {
    workingGrid: WORDLE_GRID,
    word: string,
    selectedBlock: WORDLE_COORDS,
    solved: boolean
}

export type WordleActionTypes = 'CREATE_WORDLE' | 'RESET_WORDLE' | 'SELECT_BLOCK' | 'FILL_BLOCK' ;

export interface WordleAction {
    type: WordleActionTypes;
    payload?: any;
}

export type WordleReducerType = (state: WordleState, action: WordleAction) => WordleState;

export type WordleContextHook = () => {
    workingGrid: WORDLE_GRID,
    word: string,
    selectedBlock: WORDLE_COORDS,
    solved: boolean,
    createWordle: () => void,
    fillBlock: (c: CHAR) => void,
}
