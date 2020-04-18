import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graqhql } from 'gatsby';


const Head = ({ title }) => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  )
  return (
    <Helmet title={`${title} • ${data.site.siteMetadata.title}`}></Helmet>
  )
}

export default Head;