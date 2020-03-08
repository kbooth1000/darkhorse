import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      &copy; {new Date().getFullYear()}       {data.site.siteMetadata.author}

    </footer>
  )
}

export default Footer;