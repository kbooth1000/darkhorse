import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Isotope from 'isotope-layout';

import Head from '../components/Head';
import '../styles/wp-styles/galleryStyles.css';
import '../styles/wp-styles/formatted.css';


const Gallery = () => {

  const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope(".project-grid", {
        itemSelector: ".project-thumb",
        layoutMode: "fitRows"
      })
    );
  }, []);

  React.useEffect(
    () => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    },
    [isotope, filterKey]
  );

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
    const typeClassesArr = project.node.portfolioTypes.edges.map(type => type.node.slug);
    const typeClasses = project.node.portfolioTypes.edges.reduce((val, type) => ` type-${type.node.slug}` + val, '');
    return (
      <article key={`project${i}`} className={`project-thumb ${typeClasses.toString()}`}>
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
          <li onClick={() => {
            setFilterKey("*");
          }}>All</li>
          <li onClick={() => {
            setFilterKey("type-kitchens");
          }}>Kitchens</li>
          <li onClick={() => {
            setFilterKey("type-bathrooms");
          }}>Bathrooms</li>
          <li onClick={() => {
            setFilterKey("type-built-ins");
          }}>Built-ins</li>
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