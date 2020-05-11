import React, {useState} from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import '../styles/wp-styles/galleryStyles.css';
import '../styles/wp-styles/formatted.css';


const Gallery = () => {
  const [projectTypesShown, setProjectTypesShown] = useState('all');
  const data = useStaticQuery(graphql`
  query {
    wp {
      portfolio(first: 33) {
        edges {
          node {
            title
            slug
            portfolioTypes {
              nodes {
                slug
              }
            }
            featuredImage {
              sourceUrl(size: S)
            }
            portfolioTypes {
              edges {
                node {
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  const nodes = data.wp.portfolio.edges;

  const projects = nodes.map((project, i) => {
    const typeClassesArr = project.node.portfolioTypes.edges.map( type => type.node.slug );
    const typeClasses = project.node.portfolioTypes.edges.reduce((val, type) => ` type-${type.node.slug}` + val, '');
    return (
      <article key={`project${i}`} style={{ transform: 'translate3d(0px, 0px, 0px)', width: (
        typeClassesArr.includes(projectTypesShown) ||
        projectTypesShown === 'all'
        ) ? '300px' : '0' }} className={`project-thumb ${typeClasses.toString()}`} itemScope="itemscope" itemType="http://schema.org/BlogPosting" srcSet="https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?resize=150%2C150 150w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?resize=300%2C300 300w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?zoom=2&amp;resize=300%2C300 600w, https://i1.wp.com/darkhorsewoodworks.com/dh1/wp-content/uploads/2019/11/IMG_2844.jpg?zoom=3&amp;resize=300%2C300 900w" sizes="(max-width: 300px) 100vw, 300px" itemProp="blogPost" >
        <header className="entry-header" itemScope="itemscope" itemType="http://schema.org/WPHeader">
          <div className="item">
            <Link to={`/project/${project.node.slug}`} title={project.node.title}>

              <img src={project.node.featuredImage.sourceUrl} className="post-image" alt="" />
              <div className="overlay">
              <span className="project-caption" dangerouslySetInnerHTML={{ __html: project.node.title }}>
              </span>
              </div>
            </Link>
          </div>
        </header>
      </article>
    )
  }
  )

  return (<div>
    <Layout title="Gallery">
      <Head title="Gallery" />
      <div class="portfolio-filter clearfix">
        <i class="fa fa-bars">
        </i>
        <ul>
          <li class="filter-heading">Filter:</li>
          <li>
            <div onClick={()=>{ setProjectTypesShown('all')}} className={`projects-filter ${projectTypesShown==='all' ? 'active' : ''}`}>All</div>
          </li>
          <li>
            <div onClick={()=>{ setProjectTypesShown('kitchens')}} className={`projects-filter ${projectTypesShown==='kitchens' ? 'active' : ''}`}>Kitchens</div>
          </li>
          <li>
            <div onClick={()=>{ setProjectTypesShown('bathrooms')}} className={`projects-filter ${projectTypesShown==='bathrooms' ? 'active' : ''}`}>Bathrooms</div>
          </li>
          <li>
            <div onClick={()=>{ setProjectTypesShown('built-ins')}} className={`projects-filter ${projectTypesShown==='built-ins' ? 'active' : ''}`}>Built-Ins</div>
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