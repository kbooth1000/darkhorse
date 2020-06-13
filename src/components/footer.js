import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

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
    <footer id="footer" role="contentinfo" itemScope="itemscope" itemType="http://schema.org/WPFooter" className={footerStyles.footer}>
      


      <div className="wrap clearfix"><nav role="navigation" itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement">
      <ul id="links" className="footer-menu">
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51"><Link to="/about/">About</Link></li>
      <li className="portfolio menu-item menu-item-type-post_type menu-item-object-page menu-item-24"><Link to="/gallery/">Gallery</Link></li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><Link to="/press/">Press</Link></li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216"><Link to="/accolades/">Reviews</Link></li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"><Link to="/blog/">Blog</Link></li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"><Link to="/contact/">Contact</Link></li>
      </ul></nav>
      <p className="copyright">Copyright &copy; {new Date().getFullYear()}       {data.site.siteMetadata.title}<br /></p></div>

    </footer>
  )
}

export default Footer;