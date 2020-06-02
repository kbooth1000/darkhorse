import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import '../styles/projectStyles.css';



const Project = props => {

  const portfolioTitle = props.data.wp.portfolioBy.title;


  return (
    <Layout title={portfolioTitle}>
      <Head title={props.data.wp.portfolioBy.title} />
      <div dangerouslySetInnerHTML={{ __html: props.data.wp.portfolioBy.content }}>
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