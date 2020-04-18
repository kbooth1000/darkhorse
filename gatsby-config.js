/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/darkhorse`,
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Kyle J Booth'
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wp`,
        url: `http://darkhorsewoodworks.com/dh1/graphql`
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-react-helmet',
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]

      }
    }
  ]
}
