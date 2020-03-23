import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import { graphql } from 'gatsby';
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

  const postContent = props.data.wp.postBy.title;


  return (
    <Layout>
      <Head title={props.data.wp.postBy.title} />
      <h1>{postContent}</h1>
      <div dangerouslySetInnerHTML={ {__html: props.data.wp.postBy.content} }>
      </div>
    </Layout>
  )
}

export default Blog;


export const query = graphql`
  query($slug: String!) {
    wp {
      postBy(slug: $slug) {
        content(format: RENDERED)
        title
      }
    }
  }
`