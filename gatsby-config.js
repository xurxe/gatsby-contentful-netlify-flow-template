require('dotenv').config()
/*
create .env file with the environmental variables spaceId and accessToken.
to get them from Contentful:
    - go to the space (project) > Settings > API keys
    - create a key or use a previously-existing one

to add them on Netlify for deployment:
    - go to the site > Site settings > Build & deploy > Environment
*/

const postCSS = require(`autoprefixer`)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [postCSS],
      },
    },
  ],
}
