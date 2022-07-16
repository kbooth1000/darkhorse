import React from "react";
import Layout from '../components/Layout';
//import ImageGallery from '../components/imageGallery';
import TwitterWidget from '../components/twitterWidget';
//import FacebookWidget from '../components/facebookWidget';
import { Link } from 'gatsby';
import logo from '../assets/logo.png';
import Head from '../components/Head';

import '../styles/fbstyles.css';
import '../styles/wp-styles/style.css';
import '../styles/homeStyles.css';
import '../styles/instaStyles.css';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';


export default () => {
  const bgImages = [
    bg1,bg2,bg3, bg1
  ]
return (<Layout title="Home">
  <Head title="Home" />
  <section id="hero">
    <div className="masthead" style={{ backgroundImage: `url(${bgImages[Math.floor(Math.random()*bgImages.length)]})` }}>
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
      <img className="hidden-fb-poster-pic" src={require('../assets/uploads/2014/12/screenshot.png')} alt="screenshot" />
    </div>
    <div className="homepage-decoration">
      <Link to="press/">
        <img alt="" src={require('../assets//uploads/2016/02/WoodDiamond.png') } />
        <br />
        <br />
        <footer>Multiple-time Winner of the Prestigious CMA Wood Diamond Award
    </footer>
      </Link>
    </div>
  </section>

  <section className="columns">
    <div className="wrap">
      <div className="column">
        <h2>Our Story
    </h2>
        <a href="about#ourstory">
          <img src={require('../assets//uploads/2014/11/about2.jpeg') } alt="Designing a custom piece allows you to choose all of the details – style, materials, color, finish and size. We will talk about styles you like, look at photos of similar pieces and talk about what you do and don’t like about them. We will discuss the intended use and the room where the piece will be used. If you've created a sketch of what you have in mind, we’ll look at that, too. All of this information goes into each piece Dark Horse builds. Together, we will create a design that fits your needs and your desire for a one-of-a-kind creation....." />
        </a>
        <img alt="" className="unhidden-fb-poster-pic" src={require('../assets//uploads/2014/12/screenshot.png')} />
      </div>
      <div className="column">
        <h2>Working with Us
    </h2>
        <a href="about/working-with-dark-horse/">
          <img src={require('../assets//uploads/2014/11/dhnewspace1.jpg') } alt="" style={{ width: '100%' }} />
        </a>
      </div>
      <div className="column">
        <h2>Contact Us
    </h2>
        <div id="contact-home">
          <a href="contact">
            <img src={require('../assets//uploads/2014/11/chris1.jpeg')} alt="Chris Dehmer, Owner" />
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






  <aside id="sidebar-footer" itemscope="itemscope" itemtype="http://schema.org/WPSideBar">

    <section className="columns home-widgets">
      <div className="wrap">
      <div className="column">
        <h4 className="widget-title">Our Instagram Shots</h4>
        {/*<ImageGallery />*/}

        <a href="https://www.instagram.com/darkhorsewoodworks/" class="link-tile"><span class="twitter-logotype">Check us out on Instagram</span></a>
        <a href="https://www.instagram.com/darkhorsewoodworks/" class="link-tile"><svg class="instagram-logo" ariaHidden="true" aria-label="Instagram" role="img" viewBox="0 0 448 512"> <path fill="#333" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path> </svg><span class="instagram-logotype">darkhorsewoodworks</span></a>








        
      </div>


      <div className="column">
        <h4 className="widget-title">Our Latest Tweets</h4>
        <TwitterWidget />
      </div>

      <div className="column">
        <h4 className="widget-title">Our Latest FB Posts</h4>
        {/* <FacebookWidget /> */}
        <div className="fb-logo" style={{width:'100%', display: 'flex', alignItems:'center'}}>
        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/DHWoodworks/" style={{display:'flex'}}>
        <img className="fb-logo-img" src={logo} style={{width: '80px'}} title="Dark Horse Woodworks" alt="Dark Horse Woodworks" />
        <aside style={{fontSize:'.8em', textAlign:'right'}}>
        <span style={{color:'#444'}}>Dark Horse Woodworks</span><br />
        See our latest posts
        </aside>
        </a>
        </div>
        <br />
        <br />
        <table style={{width: '96px', float:'right', marginRight:'1rem'}} cellpadding="0" cellspacing="0"><tr><td><a href="https://www.houzz.com/pro/darkhorsewoodworks/dark-horse-woodworks"><img src="https://st.hzcdn.com/static/badge_19_9@2x.png" alt="Christopher Dehmer in Atlanta, GA on Houzz" width="96" height="96" border="0" /></a></td></tr></table>
      </div>
      </div>
    </section>


  </aside>

</Layout>)}