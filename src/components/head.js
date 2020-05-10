import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';


const Head = ({ title }) => {
  const data = useStaticQuery(
    graphql`
    query {
      wp {
        portfolio(first: 33) {
          edges {
            node {
              title
              slug
              featuredImage {
                sourceUrl(size: S)
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  )
  return (
    <Helmet title={`${title} • ${data.site.siteMetadata.title} ${data.wp.portfolio.edges[0].node.title}`} encodeSpecialCharacters={false}><body className={title} /></Helmet>
  )
}

export default Head;