import React from 'react';
import { graphql } from 'gatsby';
import Modali, { useModali } from 'modali';

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

  const loadingImgUrl = 'https://thumbs.gfycat.com/SpecificCharmingLeafcutterant-size_restricted.gif';

  const handleLightboxClick = e=>{
    e.currentTarget.querySelector('img').setAttribute('src', loadingImgUrl);
    e.currentTarget.classList.remove('active');
    e.currentTarget.classList.add('inactive');
  }


  const portfolioTitle = props.data.wp.portfolioBy.title;


  return (
    <Layout title={portfolioTitle}>
      <Head title={props.data.wp.portfolioBy.title} />
      <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
      <div onClick={handleLightboxClick} className="lightbox-box"><img src="https://thumbs.gfycat.com/SpecificCharmingLeafcutterant-size_restricted.gif" alt="LOADING"/></div>
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
      }
    }
  }
`