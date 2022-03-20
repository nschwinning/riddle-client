import React from 'react'
import CSS from 'csstype';

interface Props {
    
}

const content: CSS.Properties = {
    textAlign: 'center'
};

const my1: CSS.Properties = {
    margin: '1rem 0'
};

const p: CSS.Properties = {
    margin: '1rem 0'
};

const Home = (props: Props) => {
    return (
        <div style={content}>
            <h1>About this App</h1>
            <p style={my1}>
                React App with Typescript and Styled Components
            </p>
            <p style={p}>
                © 2021 Nils Schwinning, <strong>Version:</strong> 1.0.0
            </p>
        </div>
    )
}

export default Home
