import React from 'react';
import './styles.css';

const Header = ({ header }) => {

    const { id } = header;

    const jsx = (
        <header
        className='Header'
        >
            <p>Header: {id}</p>
        </header>

    )

    return jsx;
}

export default Header;