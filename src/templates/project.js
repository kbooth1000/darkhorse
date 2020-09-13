import React from 'react';
import { graphql, Link } from 'gatsby';
import SocialSharing from '../components/socialSharing';

import Layout from '../components/layout';
import Head from '../components/head';
import '../styles/projectStyles.css';



const Project = props => {


  const html = props.data.wp.portfolioBy.content;

  function replaceAll(searchString, replaceString, str) {
    return str.split(searchString).join(replaceString);
 }

  const fancyHtml = replaceAll('itemprop="url', `onclick="(e => { e.preventDefault(); 
  var largeImgUrl = e.currentTarget.querySelector('img').dataset.largeFile;  
  var lightboxBox = document.querySelector('.lightbox-box'); 
  lightboxBox.classList.remove('inactive');
  lightboxBox.classList.add('active');
  lightboxBox.querySelector('img').setAttribute('src', largeImgUrl);
  
  })(window.event)" itemprop="url`, html);
  const fancyHtml1 = replaceAll('http://www.atlantavoices.com/dh/', '/', fancyHtml);
  
  // const fancyHtml1a = replaceAll('src="https://i1.wp.com', 'src="https://i2.wp.com', fancyHtml1);

  // const fancyHtml2 = replaceAll('src="https://i2.wp.com/www.atlantavoices.com/dh/wp-content', `src="localhost:8000/assets`, fancyHtml1a);

  // const fancyHtml3 = replaceAll(' width="', `')}`, fancyHtml2);

  const finalHtml = `${replaceAll('<iframe ', '<iframe data-display="none"', fancyHtml1)}`;
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



  const houzzButtonHtml = `<a class="houzz-share-button"
  data-url="http://darkhorsewoodworks.com/dh1/project/${props.data.wp.portfolioBy.slug}"
  data-hzid="2881"
  data-title="${portfolioTitle}"
  data-img="${replaceAll('darkhorsewoodworks.com/dh1','atlantavoices.com/dh',featuredImage)}"
  data-desc="${props.data.wp.portfolioBy.excerpt.substring(0,props.data.wp.portfolioBy.excerpt.indexOf('</p>'))}"
  data-category="${props.data.wp.portfolioBy.termNames.toString()}"
  data-showcount="1 "
  href="https://www.houzz.com">Houzz</a>`
console.log('HouzzButton:',houzzButtonHtml);

  return (
    <Layout title={portfolioTitle}>
      <Head title={props.data.wp.portfolioBy.title} isProject={true} />
      <SocialSharing pageLink={(typeof window !== 'undefined') ? window.location : '#'} featuredImage={featuredImage} />
      <span style={{float:'left', marginTop:'-1rem'}}>
      <Link to="gallery"><span style={{color:'#666', fontWeight: '100', textDecoration:'none'}}>...Gallery</span></Link></span><br /><br />
      <img className="featured-image" src={featuredImage} />
      <div dangerouslySetInnerHTML={{ __html: finalHtml }} />
      <span className="save-to-houzz">Save to Houzz:</span><br />
      <div dangerouslySetInnerHTML={{ __html: replaceAll('darkhorsewoodworks.com/dh1','atlantavoices.com/dh',houzzButtonHtml)} } />
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
        slug
        excerpt
        termNames(taxonomies: PORTFOLIOTYPE)
        content
        featuredImage {
          sourceUrl(size: L)
        }
        title
      }
    }
  }
`