// @flow

import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/App'
import type { AppTypes } from '../types.js'

type Props = {
  data: AppTypes,
}

const IndexPage = ({ data }: Props) => <App data={data}></App>

export default IndexPage

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
      footer {
        id
      }
    }
  }
`
