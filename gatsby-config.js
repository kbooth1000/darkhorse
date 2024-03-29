/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./data/config');


module.exports = {
  pathPrefix: `/dh1`,
  siteMetadata: {
    title: 'Dark Horse Woodworks',
    author: 'Kyle J Booth'
  },
  plugins: [
    //`gatsby-plugin-instagram`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    `gatsby-plugin-sharp`,

    //`gatsby-plugin-offline`,
    //{
    //  resolve: `gatsby-source-instagram`,
    //  options: {
    //    // type: `user-profile`,
    //    username: `darkhorsewoodworks`//`1557694970` //config.social.instagram,
    //  },
    //},

    

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: `${__dirname}/src/components`,
          common: `${__dirname}/src/components/common/`,
          static: `${__dirname}/static/`,
          theme: `${__dirname}/src/components/theme`,
          data: `${__dirname}/data/`,
        },
      },
    },




    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wp`,
        url: `http://www.atlantavoices.com/dh2/graphql`
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