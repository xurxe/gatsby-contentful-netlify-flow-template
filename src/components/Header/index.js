// @flow

import React from 'react'
import './styles.css'
import type { HeaderTypes } from '../../types.js'

type Props = {
  data: HeaderTypes,
}
const Header = ({ data }: Props) => {
  const { id } = data

  const jsx = (
    <header className="Header">
      <p>Header: {id}</p>
    </header>
  )

  return jsx
}

export default Header
