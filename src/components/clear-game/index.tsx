import React, { FC } from 'react'

import { Button } from '..'
import { useSudokuContext } from '../../context/sudoku';

const ClearGame: FC = () => {
  const { clearGrid } = useSudokuContext();

  return <Button onClick={clearGrid}>Clear Game</Button>
}

export default ClearGame
