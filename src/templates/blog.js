import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug: {eq: $slug}){
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}
`

const Blog = props => {

  const { title: blogTitle, publishedDate, body } = props.data.contentfulBlogPost;



  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const { title: picTitle, file } = node.data.target.fields;
        const alt = picTitle['en-US'];
        const url = file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{blogTitle}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog;