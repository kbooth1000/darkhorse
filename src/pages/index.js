import React from "react";
import Layout from '../components/Layout';
import ImageGallery from '../components/imageGallery';
import { Link } from 'gatsby';

import Head from '../components/Head';

import '../styles/wp-styles/style.css';
import '../styles/homeStyles.css';

export default () => <Layout>
  <Head title="Home" />
  <section id="hero">
    <div className="masthead" style={{ backgroundImage: 'url(https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2014/11/ss-kitchen.jpg?1587682416)' }}>
    </div>
    <div className="gradient">
      <table className="houzz-influencer-badge" style={{ width: '96px', marginTop: '100px' }} cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td>
              <a href="http://www.houzz.com/pro/darkhorsewoodworks/dark-horse-woodworks">
                <img src="http://st.hzcdn.com/static/badge_19_9@2x.png" alt="Christopher Dehmer in Atlanta, GA on Houzz" width="96" height="96" border="0" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="wrap">
      <h2>
        <div className="wrapBG">
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uncommon
          <br />
            <b> &nbsp;&nbsp;Designs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </b>
          </h1>
          <h2>Uncommon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Craftsmanship
          </b>
          </h2>
          <h1>
            <b>&nbsp;&nbsp;Exceptional
          </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cabinetry
        </h1>
          <br />
        </div>
      </h2>
      <Link to="gallery" title="View Our Work" className="btn">View Our Work
  </Link>
      <nav className="homepage-lower-menu" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
        <ul className="header-menu">
          <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
            <Link to="gallery" data-filter=".custom-kitchens" className="active">Custom Kitchens
  </Link>
          </li>
          <li id="menu-item-50" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
            <Link to="accolades/">Accolades
  </Link>
          </li>
          <li id="menu-item-24" className="portfolio menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
            <Link to="gallery/">Gallery
  </Link>
          </li>
          <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
            <Link to="press/">Press
  </Link>
          </li>
          <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
            <Link to="contact/">Contact
  </Link>
          </li>
        </ul>
      </nav>
      <img className="hidden-fb-poster-pic" src="http://i2.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2014/12/screenshot.png" />
    </div>
    <div className="homepage-decoration">
      <Link to="press/">
        <img src="http://darkhorsewoodworks.com/dh1/wp-content/uploads/2016/02/WoodDiamond.png" />
        <br />
        <br />
        <footer>Multiple-time Winner of the Prestigious CMA Wood Diamond Award
    </footer>
      </Link>
    </div>
  </section>

  <section id="columns">
    <div className="wrap">
      <div className="column">
        <h2>Our Story
    </h2>
        <a href="about#ourstory">
          <img src="http://darkhorsewoodworks.com/dh1/wp-content/uploads/2014/11/about2.jpeg" alt="Designing a custom piece allows you to choose all of the details – style, materials, color, finish and size. We will talk about styles you like, look at photos of similar pieces and talk about what you do and don’t like about them. We will discuss the intended use and the room where the piece will be used. If you've created a sketch of what you have in mind, we’ll look at that, too. All of this information goes into each piece Dark Horse builds. Together, we will create a design that fits your needs and your desire for a one-of-a-kind creation....." />
        </a>
        <img className="unhidden-fb-poster-pic" src="http://i2.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2014/12/screenshot.png" />
      </div>
      <div className="column">
        <h2>Working with Us
    </h2>
        <a href="about/working-with-dark-horse/">
          <img src="http://darkhorsewoodworks.com/dh1/wp-content/uploads/2014/11/dhnewspace1.jpg" alt="" style={{ width: '100%' }} />
        </a>
      </div>
      <div className="column">
        <h2>Contact Us
    </h2>
        <div id="contact-home">
          <a href="contact">
            <img src="http://i2.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2014/11/chris1.jpeg" alt="Chris Dehmer, Owner" />
          </a>
          <p> To inquire about our services, please call us
    <br />
            <b> 404-798-9829
    </b>
            <br />or
  <br />
            <a href="contact">CLICK HERE
  </a>.
  </p>
        </div>
      </div>
    </div>
  </section>












  <aside id="sidebar-footer" role="complementary" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">


    <section id="columns">
      <div className="column">
        <h4 className="widget-title">Our Instagram Shots</h4>
        <ImageGallery />
      </div>


      <div className="column">
        <h4 className="widget-title">Our Latest Tweets</h4>
        <ImageGallery />
      </div>

      <div className="column">
        <h4 className="widget-title">Our Latest FB Posts</h4>
        <ImageGallery />
      </div>

    </section>


  </aside>

</Layout>