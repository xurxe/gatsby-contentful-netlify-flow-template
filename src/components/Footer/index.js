import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';

const Footer = ({ data }) => {

    const { id } = data;
    
    const jsx = (
        <footer
        className='Footer'
        >
            Footer: {id}
        </footer>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Footer data={data} {...props}></Footer>}
    />
)

export const query = graphql`
{
	contentfulFooter {
        id
	}
}
`