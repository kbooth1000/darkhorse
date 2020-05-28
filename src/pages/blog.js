import React from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import blogStyles from './blog.module.scss';


const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    wp {
      posts(first: 33) {
        edges {
          node {
            date
            author {
              name
            }
            content(format: RENDERED)
            title(format: RENDERED)
            slug
          }
        }
      }
    }
  }
  `);

  const nodes = data.wp.posts.edges;
  const posts = nodes.map((post, i) => (
    <li key={`post${i}`} className={blogStyles.post}>
      <Link to={`/blog/${post.node.slug}`}>
        <h3 className="blog-title">{post.node.title}</h3>
        <p className="blog-date">{post.node.date}</p>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.node.content }}></div>

    </li>
  ))

  return (<div>
    <Layout title="Blog">
      <Head title="Blog" />
      <div className="entry-content">
        <ul className={blogStyles.posts}>
          {posts}
        </ul>
      </div>
    </Layout>
  </div>
  )
}

export default Blog;