import React from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import blogStyles from './blog.module.scss';


const Gallery = () => {
  const data = useStaticQuery(graphql`
  query {
    wp {
      portfolio(first: 33) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  }
  `);
  const nodes = data.wp.portfolio.edges;
  const projects = nodes.map((project, i) => (
    <li key={`project${i}`} className={blogStyles.projectTile}>
      <Link to={`/project/${project.node.slug}`}>
        <h3 className="blog-title">{project.node.title}</h3>
        {/* <p className="blog-date">{project.node.publishedDate}</p> */}
        {/* <p className="blog-excerpt">{project.node.publishedDate}</p> */}
      </Link>
    </li>
  ))

  return (<div>
    <Layout>
      <Head title="Gallery" />
      <h1>Gallery</h1>
      <div>Posts will show up here.
        <ul className={blogStyles.posts}>
          {projects}
        </ul>
      </div>
    </Layout>
  </div>
  )
}

export default Gallery;