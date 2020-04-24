import React from "react";
import Layout from '../components/Layout';

import Head from '../components/Head';

import '../styles/wp-styles/style.css';

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
      <a href="gallery" title="View Our Work" className="btn">View Our Work
  </a>
      <nav className="homepage-lower-menu" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
        <ul className="header-menu">
          <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-51">
            <a href="gallery" data-filter=".custom-kitchens" className="active">Custom Kitchens
  </a>
          </li>
          <li id="menu-item-50" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
            <a href="http://darkhorsewoodworks.com/dh1/accolades/">Accolades
  </a>
          </li>
          <li id="menu-item-24" className="portfolio menu-item menu-item-type-post_type menu-item-object-page menu-item-24">
            <a href="http://darkhorsewoodworks.com/dh1/gallery/">Gallery
  </a>
          </li>
          <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
            <a href="http://darkhorsewoodworks.com/dh1/press/">Press
  </a>
          </li>
          <li id="menu-item-15" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
            <a href="http://darkhorsewoodworks.com/dh1/contact/">Contact
  </a>
          </li>
        </ul>
      </nav>
      <img className="hidden-fb-poster-pic" src="http://i2.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2014/12/screenshot.png" />
    </div>
    <div className="homepage-decoration">
      <a href="http://darkhorsewoodworks.com/dh1/press/">
        <img src="http://darkhorsewoodworks.com/dh1/wp-content/uploads/2016/02/WoodDiamond.png" />
        <br />
        <br />
        <footer>Multiple-time Winner of the Prestigious CMA Wood Diamond Award
    </footer>
      </a>
    </div>
  </section>
</Layout>

