import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import { graphql } from 'gatsby';
import SocialSharing from '../components/socialSharing';

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// export const query = graphql`
// query($slug: String!){
//   contentfulBlogPost(slug: {eq: $slug}){
//     title
//     publishedDate(formatString: "MMMM Do, YYYY")
//     body {
//       json
//     }          
//   }
// }
// `

const Blog = props => {

  const { date, author, content, title } = props.data.wp.postBy

  // const postContent = props.data.wp.postBy.title;
  const replaceAll = (searchString, replaceString, str) => {
    return str.split(searchString).join(replaceString);
  }
  const fancyHtml2 = replaceAll('https://i1.wp.com/', '//', content);
  const fancyHtml3 = replaceAll('https://i2.wp.com/', '//', fancyHtml2);


  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p class="entry-meta">
        <time className="entry-time" itemProp="datePublished" dateTime="2019-07-19T14:39:30-04:00">
          {date}
        </time> by
      <span className="entry-author vcard" itemProp="author" itemScope="itemscope" itemType="http://schema.org/Person">
          <span> <strong> {author.name}</strong>
          </span>
        </span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: fancyHtml3 }}>
      </div>
      <SocialSharing pageLink={(typeof window !== 'undefined') ? window.location : '#'} />
    </Layout>
  )
}

export default Blog;


export const query = graphql`
  query($slug: String!) {
    wp {
      postBy(slug: $slug) {
        date
        author {
          name
        }
        content(format: RENDERED)
        title(format: RENDERED)
      }
    }
  }
`