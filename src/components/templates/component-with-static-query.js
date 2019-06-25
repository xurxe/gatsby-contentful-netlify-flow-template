import React from 'react';
import './styles.css';

import { StaticQuery, graphql } from 'gatsby';

const ComponentWithStaticQuery = ({ data, props }) => {

    const { site } = data;
    
    const jsx = (
        <div 
        props={props}
        site={site}
        >
            Component with static query
        </div>
    )

    return jsx;
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <ComponentWithStaticQuery data={data} {...props}></ComponentWithStaticQuery>}
    />
)

export const query = graphql`
{
    site {
        id
    }
}
`