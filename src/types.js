// @flow

export type SeoTypes = {
  id: string,
  title: string,
  description: string,
  image: {
    file: {
      url: string,
    },
  },
  url: string,
  keywords: string,
  author: string,
}

export type NavigationBarTypes = {
  id: string,
}

export type PageTypes = {
  id: string,
  slug: string,
}

export type HeaderTypes = {
  id: string,
}

export type MainTypes = {
  id: string,
}

export type FooterTypes = {
  id: string,
}

export type IndexTypes = {
  id: string,
  header: HeaderTypes,
  main: MainTypes,
  footer: FooterTypes,
}

export type AppTypes = {
  contentfulSeo: SeoTypes,
  contentfulIndex: IndexTypes,
}

export type NavTypes = {
  contentfulNavigationBar: NavigationBarTypes,
  allContentfulPage: {
    edges: Array<PageTypes>,
  },
}
