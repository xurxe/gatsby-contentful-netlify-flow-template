// @flow

import React from 'react'
import './styles.css'
import { StaticQuery, graphql } from 'gatsby'
import type { FooterTypes } from '../../types.js'

type Props = {
  data: FooterTypes,
}

const Footer = ({ data }: Props) => {
  const { id } = data
  const jsx = <footer className="Footer">Footer: {id}</footer>

  return jsx
}

export const query = graphql`
  {
    contentfulFooter {
      id
    }
  }
`

const Static = () => (
  <StaticQuery query={query} render={data => <Footer data={data}></Footer>} />
)

export default Static
