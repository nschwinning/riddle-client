import React, { FC } from 'react'

import { Button } from '..'
import { useSudokuContext } from '../../context/sudoku';

const SolveGame: FC = () => {
  const { solveGrid } = useSudokuContext();

  return <Button onClick={solveGrid}>Solve Game</Button>
}

export default SolveGame
