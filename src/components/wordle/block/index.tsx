import React, { FC } from 'react'
import { Container } from './styles'
import { INDEX, N, WORDLE_CHAR, WORDLE_TRY } from '../../../typings'
import { useWordleContext } from '../../../context/wordle'

interface IProps {
    colIndex: WORDLE_CHAR
    rowIndex: WORDLE_TRY
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {

    const { workingGrid, selectedBlock } = useWordleContext();
    

    function isActive() : boolean {
        return false
    }

    function handleClick() {
        if (!isActive()) {
            //selectBlock([rowIndex, colIndex]);
        }
      }

    let active: boolean = isActive();

    const value = workingGrid[rowIndex][colIndex];
    return (
        <Container active={active} onClick={handleClick} puzzle={true} >{value}</Container>
    )
}

export default Block
