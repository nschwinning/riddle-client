import React, { useEffect} from 'react'
import { Subpage, Title, Card, Grid } from '../../components'
import { useSudokuContext } from '../../context/sudoku'
import hasOnlyZeroes from '../../util/has-only-zeroes'
import DownloadPdf from '../download-pdf'
import ManageButtons from '../manage-buttons'
import Hotkeys from "react-hot-keys";
import { INDEX, NUMBERS } from '../../typings'

interface Props {
    
}

const Sudoku = (props: Props) => {

    const { workingGrid, selectedBlock, fillBlock, selectBlock } = useSudokuContext();
    let created: boolean = !hasOnlyZeroes(workingGrid);

    function moveUp() {
        if (selectedBlock && selectedBlock[0] > 0) {
            selectBlock([
              (selectedBlock[0] - 1) as INDEX,
              selectedBlock[1],
            ])
        }
    }

    function moveRight() {
        if (selectedBlock && selectedBlock[1] < 8) {
            selectBlock([
              selectedBlock[0],
              (selectedBlock[1] + 1) as INDEX
            ])
        }
    }

    function moveLeft() {
        if (selectedBlock && selectedBlock[1] > 0) {
            selectBlock([
              selectedBlock[0],
              (selectedBlock[1] - 1) as INDEX
            ])
        }
    }

    function moveDown() {
        if (selectedBlock && selectedBlock[0] < 8) {
            selectBlock([
              (selectedBlock[0] + 1) as INDEX,
              selectedBlock[1],
            ])
        }
    }

    function fill(n: NUMBERS) {
        if (!hasOnlyZeroes(workingGrid)) {
            selectedBlock && fillBlock(n, selectedBlock);
        }
    }

    function onKeyDown(keyName: any, e: KeyboardEvent) {
        switch(e.key) {
            case 'ArrowUp': return moveUp();
            case 'ArrowDown': return moveDown();
            case 'ArrowLeft': return moveLeft();
            case 'ArrowRight': return moveRight();
            case '1': return fill(1);
            case '2': return fill(2);
            case '3': return fill(3);
            case '4': return fill(4);
            case '5': return fill(5);
            case '6': return fill(6);
            case '7': return fill(7);
            case '8': return fill(8);
            case '9': return fill(9);
        }
    }

    return (
            <Subpage>
                <Title>Sudoku</Title>
                    <Hotkeys
                        keyName="*"
                        onKeyDown={onKeyDown}
                        filter={event => true}
                    >
                        <Card>
                            <ManageButtons />
                            {created && <DownloadPdf />}
                            <Grid />
                        </Card>
                    </Hotkeys>
            </Subpage>
    )
}

export default Sudoku
