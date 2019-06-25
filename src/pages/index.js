import React from "react";

import { graphql } from 'gatsby';
import App from "../components/App";

const IndexPage = ({ data }) => (
    <App
    data={data}
    ></App>
)

export default IndexPage;

export const query = graphql`
{
    contentfulSeo {
       id
    }
    contentfulIndex {
        id
        header {
            id
        }
        main {
            id
        }
    }
}
`