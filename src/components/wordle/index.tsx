import React, { Children, FC } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { INDEX, WORDLE_CHAR, WORDLE_TRY } from '../../typings'

interface IProps {
}

const WordleGrid: FC<IProps> = () => {
    return (
        <Container id="wordlegrid">
            {Children.toArray(
                [...Array(6)].map((_, rowIndex) => (
                    <Row>
                        {Children.toArray(
                        [...Array(5)].map((_, colIndex) => (
                            <Block
                            colIndex={colIndex as WORDLE_CHAR}
                            rowIndex={rowIndex as WORDLE_TRY}
                            />
                        ))
                        )}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default WordleGrid
