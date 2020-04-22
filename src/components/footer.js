import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      &copy; {new Date().getFullYear()}       {data.site.siteMetadata.title}

    </footer>
  )
}

export default Footer;