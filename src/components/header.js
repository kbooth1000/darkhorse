import React, { useState } from 'react';
import { Link } from 'gatsby';
import Search from "../components/SearchComponent";
import '../styles/searchStyles.css'

// import headerStyles from './header.module.scss';
import logo from '../assets/logo.png';

const Header = props => {
  
  const [slickNav, setSlickNav] = useState('slicknav_hidden');
  
  const handleNavClick = e=>{
    setSlickNav(slickNav === '' ? 'slicknav_hidden' : '');
  }
  const handleNavBlur = e=>{
    setSlickNav(slickNav === '' ? 'slicknav_hidden' : '');
  }

  return (
    <header id="header" role="banner" >
      <div className="wrap clearfix">
        <div className="logo" itemProp="headline">
          <Link to="/" title="Dark Horse Woodworks" className="custom">
            <img src={logo} title="Dark Horse Woodworks" alt="Dark Horse Woodworks" />
          </Link>
        </div>


        <div className="slicknav_menu">
          <a onClick={handleNavClick} href="#" aria-haspopup="true" tabIndex="0" className="slicknav_btn" style={{ outline: 'none' }}>
            <span className="slicknav_menutxt">
            </span>
            <span className="slicknav_icon slicknav_no-text">
              <span className="slicknav_icon-bar">
              </span>
              <span className="slicknav_icon-bar">
              </span>
              <span className="slicknav_icon-bar">
              </span>
            </span>
          </a>
          <ul onBlur={handleNavBlur} className={`slicknav_nav ${slickNav}`} aria-hidden="true" role="menu">
            <li>
              <a href="#" role="menuitem" ariaHaspopup="true" tabIndex="-1" className="slicknav_item" style={{ outline: 'none' }}>
                <Link to="about/">About</Link>
              </a>
              <ul role="menu" ariaHidden="true">
                <li>
                  <Link to="about/" role="menuitem" tabIndex="-1">Our Story</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-232">
                  <Link to="working-with-darkhorse/" role="menuitem" tabIndex="-1">Working with Dark Horse</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="gallery/" role="menuitem" tabIndex="-1">Gallery</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
              <Link to="press/" role="menuitem" tabIndex="-1">Press</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216">
              <Link to="accolades/" role="menuitem" tabIndex="-1">Reviews</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
              <Link to="blog/" role="menuitem" tabIndex="-1">Blog</Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
              <Link to="contact/" role="menuitem" tabIndex="-1">Contact</Link>
            </li>
          </ul>
        </div>



        <nav role="navigation" itemScope="itemscope" itemType="http://schema.org/SiteNavigationElement">
          <ul id="nav" className="header-menu">
            <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
              <Link activeClassName="current_page_parent" to="/about/">About</Link>
              <ul className="sub-menu">
                <li id="menu-item-235" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235">
                  <Link to="/about/">Our Story</Link>
                </li>
                <li id="menu-item-232" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-232">
                  <Link to="/working-with-darkhorse/">Working with Dark Horse</Link>
                </li>
              </ul>
            </li>
            <li id="menu-item-24" className="portfolio menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
              <Link activeClassName="current_page_parent" to="/gallery/">Gallery</Link>
            </li>
            <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
              <Link activeClassName="current_page_parent" to="/press/">Press</Link>
            </li>
            <li id="menu-item-1216" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216">
              <Link activeClassName="current_page_parent" to="/accolades/">Reviews</Link>
            </li>
            <li id="menu-item-14" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
              <Link activeClassName="current_page_parent" to="/blog/">Blog</Link>
            </li>
            <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
              <Link activeClassName="current_page_parent" to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>
      <Search>search</Search>

      {/* <form className="search-form" action="http://darkhorsewoodworks.com/dh1/" method="get" role="search"> <input className="search-input" type="search" name="s" placeholder="Search" /> <button className="search-submit btn" type="submit" role="button">
        <i className="fa fa-search"> */}

        {/* </i>
      </button>
      </form> */}

    </header>
  )
}

export default Header;


