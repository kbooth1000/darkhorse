import React from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import blogStyles from './blog.module.scss';


const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(
      sort: {
        fields:publishedDate
        order:DESC
      }
    )
      {
      edges {
        node {
          
          title
          slug
          publishedDate(
            formatString: "MMMM Do, YYYY"
          )
          
          }
        }
      }
    }
       
  `);
  const nodes = data.allContentfulBlogPost.edges;
  const posts = nodes.map((post, i) => (
    <li key={`post${i}`} className={blogStyles.post}>
      <Link to={`/blog/${post.node.slug}`}>
        <h3 className="blog-title">{post.node.title}</h3>
        <p className="blog-date">{post.node.publishedDate}</p>
        {/* <p className="blog-excerpt">{post.node.publishedDate}</p> */}
      </Link>
    </li>
  ))

  return (<div>
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <div>Posts will show up here.
        <ul className={blogStyles.posts}>
          {posts}
        </ul>
      </div>
    </Layout>
  </div>
  )
}

export default Blog;