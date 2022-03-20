import { WordleReducerType } from "..";

const reducer: WordleReducerType = (state, action) => {
    switch (action.type) {
        case "CREATE_WORDLE": 
            return {
                ...state,
                word: action.payload.word
            }
        case "FILL_BLOCK":
            return {
                ...state,
                workingGrid: action.payload.workingGrid,
                selectedBlock: action.payload.selectedBlock
            }
        default:
            return state
    }
}

export default reducer;