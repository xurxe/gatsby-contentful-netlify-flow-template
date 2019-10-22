// @flow

import React from 'react'
import Helmet from 'react-helmet'

import type { SeoTypes } from '../types.js'

type Props = {
  data: SeoTypes,
}

const HelmetComponent = ({ data }: Props) => {
  const { title, description, image, url, keywords, author } = data

  const jsx = (
    <Helmet>
      <html lang="en"></html>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https:${image.file.url}`} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <script src="https://kit.fontawesome.com/6e00428cbd.js"></script>
    </Helmet>
  )
  return jsx
}

export default HelmetComponent
