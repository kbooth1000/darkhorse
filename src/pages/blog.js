import React from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import blogStyles from './blog.module.scss';
import '../styles/blogStyles.css';


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
  const posts = nodes.map((post, i) => { 
    const rawDate = (new Date(post.node.date));
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${months[rawDate.getMonth()]} ${rawDate.getDate()}, ${rawDate.getFullYear()}`
    const replaceAll = (searchString, replaceString, str) => {
      return str.split(searchString).join(replaceString);
    }
    const fancyHtml2 = replaceAll('https://i1.wp.com/', '//', post.node.content);
    const fancyHtml3 = replaceAll('https://i2.wp.com/', '//', fancyHtml2);
    
    return (
    <li key={`post${i}`} className={blogStyles.post}>
      <Link to={`/blog/${post.node.slug}`}>
        <h3 className="blog-title">{post.node.title}</h3>
        <time className="blog-date">{formattedDate}</time>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: fancyHtml3 }}></div>

    </li>
  )}
  )

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