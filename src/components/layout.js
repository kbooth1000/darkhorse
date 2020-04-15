import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import '../styles/wp-styles/style.css';
import '../styles/wp-styles/responsive.css';
import '../styles/wp-styles/style-child.css';

import 'typeface-open-sans';

import layoutStyles from './layout.module.scss';

const Layout = props =>

  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>

export default Layout;