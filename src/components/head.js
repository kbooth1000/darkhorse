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
    <Helmet title={`${title} • ${data.site.siteMetadata.title} `} encodeSpecialCharacters={false}>
    {/* <script src="https://www.google.com/recaptcha/api.js?render=6LcLj_QUAAAAAH2x9o72lGJTE5A3O2fPkXO0itaj"></script> */}
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <body className={title} />

    </Helmet>
  )
}

export default Head;