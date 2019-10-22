// @flow

import React from 'react'
import './styles.css'
import type { MainTypes } from '../../types.js'

type Props = {
  data: MainTypes,
}

const Main = ({ data }: Props) => {
  const { id } = data

  const jsx = (
    <main className="main">
      <p>Main: {id}</p>
    </main>
  )

  return jsx
}

export default Main
