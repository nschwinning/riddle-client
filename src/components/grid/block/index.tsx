import React, { FC } from 'react'
import { Container } from './styles'
import { INDEX, N } from '../../../typings'
import { useSudokuContext } from '../../../context/sudoku'

interface IProps {
    colIndex: INDEX
    rowIndex: INDEX
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
    const { workingGrid, challengeGrid, fullGrid, solved, selectedBlock, selectBlock } = useSudokuContext();

    function isActive() : boolean {
        return selectedBlock ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex : false
    }

    function handleClick() {
        if (!isActive()) {
            selectBlock([rowIndex, colIndex]);
        }
      }

    let active: boolean = isActive();
    let partOfSolution = workingGrid![rowIndex][colIndex] == 0;

    const value = solved ? fullGrid![rowIndex][colIndex] : workingGrid![rowIndex][colIndex];
    return (
        <Container active={active} onClick={handleClick} puzzle={true} solved={partOfSolution}>{value === 0 ? '' : value}</Container>
    )
}

export default Block
