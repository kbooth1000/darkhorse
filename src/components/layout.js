import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import '../styles/wp-styles/style.css';
import '../styles/wp-styles/responsive.css';
import '../styles/wp-styles/style-child.css';

import 'typeface-open-sans';
import 'typeface-raleway';

import layoutStyles from './layout.module.scss';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = props =>{

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

return <div className={`${layoutStyles.container} ${data.site.siteMetadata.title} home`}>
    <div className={layoutStyles.content}>
      <Header />
      <div className={`${layoutStyles.headerMeta} headerMeta`}>
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </div>
    <Footer />
  </div>
}

export default Layout;