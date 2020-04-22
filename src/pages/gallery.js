import React from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import blogStyles from './blog.module.scss';
import '../styles/wp-styles/galleryStyles.css';
import '../styles/wp-styles/formatted.css';


const Gallery = () => {
  const data = useStaticQuery(graphql`
  query {
    wp {
      portfolio(first: 33) {
        edges {
          node {
            title
            slug
            featuredImage {
              sourceUrl(size: S)
            }
          }
        }
      }
    }
  }
  `);
  const nodes = data.wp.portfolio.edges;

  const projects = nodes.map((project, i) => (

    <article key={`project${i}`} style={{ transform: 'translate3d(0px, 0px, 0px)' }} className="project-thumb" itemScope="itemscope" itemType="http://schema.org/BlogPosting" srcSet="https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?resize=150%2C150 150w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?resize=300%2C300 300w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?zoom=2&amp;resize=300%2C300 600w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?zoom=3&amp;resize=300%2C300 900w" sizes="(max-width: 300px) 100vw, 300px" itemProp="blogPost" >
      <header className="entry-header" itemScope="itemscope" itemType="http://schema.org/WPHeader">
        <div className="item">
          <Link to={`/project/${project.node.slug}`} title={project.node.title}>

            <img src={project.node.featuredImage.sourceUrl} className="post-image" alt="" />
            <div className="overlay">
            </div>
            <span className="project-caption">{project.node.title}
              <em>Built-Ins, Kitchens, </em>
            </span>
          </Link>
        </div>
      </header>
    </article>

  ))

  return (<div>
    <Layout title="Gallery">
      <Head title="Gallery" />
      <div class="portfolio-filter clearfix">
        <i class="fa fa-bars">
        </i>
        <ul>
          <li class="filter-heading">Filter:</li>
          <li>
            <a href="" class="active" data-filter="*">All</a>
          </li>
          <li>
            <a href="" data-filter=".kitchens">Kitchens</a>
          </li>
          <li>
            <a href="" data-filter=".bathrooms">Bathrooms</a>
          </li>
          <li>
            <a href="" data-filter=".built-ins">Built-Ins</a>
          </li>
        </ul>
      </div>
      <div className="project-grid">
        {projects}
      </div>
    </Layout>
  </div>
  )
}

export default Gallery;