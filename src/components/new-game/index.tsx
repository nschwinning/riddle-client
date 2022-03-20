import React, { FC } from 'react'

import { Button } from '..'
import { useSudokuContext } from '../../context/sudoku';
import hasOnlyZeroes from '../../util/has-only-zeroes';

const NewGame: FC = () => {
  const { workingGrid, createGrid } = useSudokuContext();
  let created: boolean = !hasOnlyZeroes(workingGrid);

  return <Button onClick={createGrid}>{created ? 'New Game' : 'Play'}</Button>
}

export default NewGame
