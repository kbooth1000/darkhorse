import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import '../styles/projectStyles.css';



const Project = props => {

  const portfolioContent = props.data.wp.portfolioBy.title;


  return (
    <Layout>
      <Head title={props.data.wp.portfolioBy.title} />
      <h1>{portfolioContent}</h1>
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