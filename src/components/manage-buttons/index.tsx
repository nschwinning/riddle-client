import React, { FC } from "react";
import { useSudokuContext } from "../../context/sudoku";
import hasOnlyZeroes from "../../util/has-only-zeroes";
import ClearGame from "../clear-game";
import DownloadPdf from "../download-pdf";
import NewGame from "../new-game";
import SolveGame from "../solve-game";
import { Container } from './styles'


const ManageButtons: FC = () => {
    const { workingGrid } = useSudokuContext();
    let created: boolean = !hasOnlyZeroes(workingGrid);

    return (
        <Container>
            <NewGame />
            {created && <SolveGame />}
            {created && <ClearGame />}
        </Container>
    )
}
    
export default ManageButtons;