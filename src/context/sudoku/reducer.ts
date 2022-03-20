import { EMPTY_GRID, SudokuReducerType } from "..";

const reducer: SudokuReducerType = (state, action) => {
    switch (action.type) {
        case "CREATE_SUDOKU":
            return {
                ...state,
                workingGrid: action.payload.grid,
                challengeGrid: action.payload.challengeGrid,
                fullGrid: action.payload.fullGrid,
                solved: false,
                sudokuId: action.payload.sudokuId,
                riddleId: action.payload.riddleId
            }
        case "RESET_SUDOKU":
            return {
                ...state,
                workingGrid: EMPTY_GRID,
                challengeGrid: EMPTY_GRID,
                fullGrid: EMPTY_GRID,
                sudokuId: '',
                riddleId: ''
            }
        case "SOLVE_SUDOKU":
            return {
                ...state,
                solved: true
            }
        case "SELECT_BLOCK":
            return {
                ...state,
                selectedBlock: action.payload
            }
        case "FILL_BLOCK": 
            return {
                ...state,
                workingGrid: action.payload.grid
            }
        default:
            return state;
    }
}

export default reducer;