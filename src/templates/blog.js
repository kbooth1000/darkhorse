import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import { graphql } from 'gatsby';
import SocialSharing from '../components/socialSharing';

import '../styles/blogStyles.css';
import logo from '../assets/logo.png';

const Blog = props => {

  const { date, author, content, title } = props.data.wp.postBy
  const contentAfterImg = content.substring(content.indexOf('<img'));
  const imgTag = contentAfterImg.substring(0, contentAfterImg.indexOf('>'));
  const imgTagFromSrc = imgTag.substring(imgTag.indexOf(' src="') + 6);
  const imgSrc = imgTagFromSrc.substring(0, imgTagFromSrc.indexOf('" '));
  const rawDate = (new Date(date));
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = `${months[rawDate.getMonth()]} ${rawDate.getDate()}, ${rawDate.getFullYear()}`
  const replaceAll = (searchString, replaceString, str) => {
    return str.split(searchString).join(replaceString);
  }
  const fancyHtml1 = replaceAll('http://www.atlantavoices.com/dh2/', '/', content);
  const fancyHtml2 = replaceAll('https://i1.wp.com/', '//', fancyHtml1);
  const fancyHtml3 = replaceAll('https://i2.wp.com/', '//', fancyHtml2);

  return (
    <Layout title={title}>
      <Head title={title} featuredImg={props.data.wp.postBy.featuredImage ? props.data.wp.postBy.featuredImg.sourceUrl : imgSrc ? imgSrc : logo} />
      <p className="entry-meta">
        <time className="entry-time">
          {formattedDate}
        </time> by
      <span className="entry-author vcard" itemProp="author" itemScope="itemscope" itemType="http://schema.org/Person">
          <span> <strong> {author.name}</strong>
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
  query($id: Int) {
    wp {
    posts(where: {id: $id}) {
      edges {
        node {
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
    }
  }
  }
`