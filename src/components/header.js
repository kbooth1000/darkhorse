import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
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
    <header id="header" role="banner" >
    <div className="wrap clearfix">
      <div className="logo" itemprop="headline">
        <a href="/" title="Dark Horse Woodworks" className="custom">
        <img src="/wp-content/uploads/2014/11/logo.png" title="Dark Horse Woodworks" alt="Dark Horse Woodworks" />
        </a>
        </div>
        <nav role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
        <ul id="nav" className="header-menu">
          <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
          <a href="/about/">About</a>
        <ul className="sub-menu">
          <li id="menu-item-235" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235">
          <a href="/about/">Our Story</a>
        </li>
        <li id="menu-item-232" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-232">
          <a href="/about/working-with-dark-horse/">Working with Dark Horse</a>
        </li>
        </ul>
        </li>
        <li id="menu-item-24" className="portfolio menu-item menu-item-type-post_type menu-item-object-page menu-item-24 current_page_parent">
          <a href="/gallery/">Gallery</a>
        </li>
        <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
          <a href="/press/">Press</a>
        </li>
        <li id="menu-item-1216" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216">
          <a href="/accolades/">Reviews</a>
        </li>
        <li id="menu-item-14" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
          <a href="/blog/">Blog</a>
        </li>
        <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
          <a href="/contact/">Contact</a>
        </li>
        </ul>
        </nav>
        </div>
        {/* <form className="search-form" action="http://darkhorsewoodworks.com/dh1/" method="get" role="search"> <input className="search-input" type="search" name="s" placeholder="Search"> <button className="search-submit btn" type="submit" role="button">
          <i className="fa fa-search">
            
          </i>
          </button>
    </form> */}
    </header>
      )
    }
    
    export default Header;



    {/* <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
        </li>
      </ul>
    </header> */}