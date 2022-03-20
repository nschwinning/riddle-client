import React, { FC } from 'react'

import { Button } from '..'
import { useSudokuContext } from '../../context/sudoku';
import { Container } from '../manage-buttons/styles';

const DownloadPdf: FC = () => {
  const { downloadFile } = useSudokuContext();

  return (
    <Container>
      <Button onClick={downloadFile}>Download</Button>
    </Container>
  )
}

export default DownloadPdf
