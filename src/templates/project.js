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
  const fancyHtml = replaceAll('class="fancybox', `onclick="(e => { e.preventDefault();    var prevImgClone = document.querySelector('.fancy-image-clone');    if(prevImgClone) {document.body.removeChild(prevImgClone);}  var largeImgUrl = e.currentTarget.href;   var imgClone = e.currentTarget.parentElement.cloneNode(true);    imgClone.classList.add('fancy-image-clone');    imgClone.querySelector('img').setAttribute('src','https://thumbs.gfycat.com/SpecificCharmingLeafcutterant-size_restricted.gif');    imgClone.querySelector('img').setAttribute('src',largeImgUrl);   document.body.appendChild(imgClone);})(window.event)" class="fancybox`, html);
  const finalHtml = `${fancyHtml} `;




  const portfolioTitle = props.data.wp.portfolioBy.title;


  return (
    <Layout title={portfolioTitle}>
      <Head title={props.data.wp.portfolioBy.title} />
      <div dangerouslySetInnerHTML={{ __html: finalHtml }}>
      </div>
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