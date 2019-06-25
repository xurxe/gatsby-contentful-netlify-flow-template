import React from 'react';
import './styles.css';

const Main = ({ main }) => {

    const { id } = main;
    
    const jsx = (
        <main
        className='main'
        >
            <p>Main: {id}</p>
        </main>
    )

    return jsx;
}

export default Main;