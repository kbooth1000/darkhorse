import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import '../styles/wp-styles/style.css';
import '../styles/wp-styles/responsive.css';
import '../styles/wp-styles/style-child.css';

import 'typeface-open-sans';
import 'typeface-raleway';

import '../styles/layout.css';
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

return <div className={` ${data.site.siteMetadata.title} home`}>
    <div className="page-contents">
      <Header />
      <div className="headerMeta">
        <h1 className="page-title">{props.title}</h1>
      </div>
      {props.children}
    </div>
    <Footer />
  </div>
}

export default Layout;