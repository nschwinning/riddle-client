import { GRID, INDEX } from "../../typings";

function hasOnlyZeroes(grid: GRID): boolean {
    for (let r: INDEX = 0; r < 9; r++) {
        for (let c: INDEX = 0; c < 9; c++) {
            if (grid![r][c] !== 0) {
                return false;
            }
        }
    }
    return true;
}

export default hasOnlyZeroes;