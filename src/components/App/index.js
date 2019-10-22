// @flow

import React from 'react'
import './styles.css'
import HelmetComponent from '../HelmetComponent'
import Nav from '../Nav'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import type { AppTypes } from '../../types.js'

type Props = {
  data: AppTypes,
}

const App = ({ data }: Props) => {
  const { contentfulSeo, contentfulIndex } = data
  const { header, main, footer } = contentfulIndex

  const jsx = (
    <div className="App">
      <HelmetComponent data={contentfulSeo}></HelmetComponent>
      <Nav></Nav>
      <Header data={header}></Header>
      <Main data={main}></Main>
      <Footer data={footer}></Footer>
    </div>
  )

  return jsx
}

export default App
