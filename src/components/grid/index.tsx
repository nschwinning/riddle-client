import React, { Children, useEffect, useRef, FC } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { INDEX } from '../../typings'

interface IProps {
}

const Grid: FC<IProps> = () => {

    return (
        <Container id="grid">
            {Children.toArray(
                [...Array(9)].map((_, rowIndex) => (
                    <Row>
                        {Children.toArray(
                        [...Array(9)].map((_, colIndex) => (
                            <Block
                            colIndex={colIndex as INDEX}
                            rowIndex={rowIndex as INDEX}
                            />
                        ))
                        )}
                    </Row>
                ))
            )}
        </Container>
    )
}

export default Grid
