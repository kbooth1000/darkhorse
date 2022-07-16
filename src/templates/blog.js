import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import { graphql } from 'gatsby';
import SocialSharing from '../components/socialSharing';

import '../styles/blogStyles.css';
import logo from '../assets/logo.png';

const Blog = props => {
  
  const { date, content, title, author } = props.pageContext;
  const contentAfterImg = content.substring(content.indexOf('<img'));
  const imgTag = contentAfterImg.substring(0, contentAfterImg.indexOf('>'));
  const imgTagFromSrc = imgTag.substring(imgTag.indexOf(' src="') + 6);
  const imgSrc = imgTagFromSrc.substring(0, imgTagFromSrc.indexOf('" '));
  // console.log('blogProps:',props.pageContext, date);
  const rawDate = (new Date(date));
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = `${months[rawDate.getMonth()]} ${rawDate.getDate()}, ${rawDate.getFullYear()}`
  const replaceAll = (searchString, replaceString, str) => {
    return str.split(searchString).join(replaceString);
  }
  const fancyHtml1 = replaceAll(' src="http://www.atlantavoices.com/dh2/', ' src="https://i2.wp.com/www.atlantavoices.com/dh2/', content);
  const fancyHtml2 = replaceAll('https://i1.wp.com/', '//', fancyHtml1);
  const fancyHtml3 = fancyHtml1; //replaceAll('https://i2.wp.com/', '//', fancyHtml2);

  return (
    <Layout title={title}>
      <Head title={title} featuredImg={props.pageContext.featuredImage ? props.pageContext.featuredImg.node.sourceUrl : imgSrc ? imgSrc : logo} />
      <p className="entry-meta">
        <time className="entry-time">
          {formattedDate}
        </time> by
      <span className="entry-author vcard" itemProp="author" itemScope="itemscope" itemType="http://schema.org/Person">
          <span> <strong> {author}</strong>
          </span>
        </span>
      </p>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: fancyHtml3 }}>
      </div>
      <SocialSharing pageLink={(typeof window !== 'undefined') ? window.location : '#'} />
    </Layout>
  )
}

export default Blog;


export const query = graphql`
  query($id: ID!) {
    wp {
    post(id: $id) {
          date
          content(format: RENDERED)
          title(format: RENDERED)
          slug
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl(size: M)
            }
          }
    }
  }
  }`