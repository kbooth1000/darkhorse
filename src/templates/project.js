import React from 'react';
import { graphql } from 'gatsby';
import SocialSharing from '../components/socialSharing';

import Layout from '../components/layout';
import Head from '../components/head';
import '../styles/projectStyles.css';



const Project = props => {


  const html = props.data.wp.portfolioBy.content;

  function replaceAll(searchString, replaceString, str) {
    return str.split(searchString).join(replaceString);
 }

  console.log('html:', typeof html);
  const fancyHtml = replaceAll('class="fancybox', `onclick="(e => { e.preventDefault(); 
  var largeImgUrl = e.currentTarget.href;  
  var lightboxBox = document.querySelector('.lightbox-box'); 
  lightboxBox.classList.remove('inactive');
  lightboxBox.classList.add('active');
  lightboxBox.querySelector('img').setAttribute('src', largeImgUrl);
  
  })(window.event)" class="fancybox`, html);
  const finalHtml = `${fancyHtml} `;

  const loadingImgUrl = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';

  const handleLightboxClick = e=>{
    e.currentTarget.querySelector('img').setAttribute('src', loadingImgUrl);
    e.currentTarget.classList.remove('active');
    e.currentTarget.classList.add('inactive');
  }

  const handleImgLoad = e=>{
    e.currentTarget.querySelector('img').style.borderRadius='0%';
  }


  const portfolioTitle = props.data.wp.portfolioBy.title;
  const featuredImage = props.data.wp.portfolioBy.featuredImage.sourceUrl;


  return (
    <Layout title={portfolioTitle}>
      <Head title={props.data.wp.portfolioBy.title} />
      <SocialSharing pageLink={(typeof window !== 'undefined') ? window.location : '#'} /><br />
      <img className="featured-image" src={featuredImage} />
      <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
      <div onClick={handleLightboxClick}
      onLoad={handleImgLoad} className="lightbox-box"><img src={loadingImgUrl} alt="LOADING"/></div>
    </Layout>
  )
}

export default Project;


export const query = graphql`
  query($slug: String!) {
    wp {
      portfolioBy(slug: $slug) {
        content(format: RENDERED)
        title
        featuredImage {
          sourceUrl(size: L)
        }
      }
    }
  }
`