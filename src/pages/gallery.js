import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/Head';
import '../styles/wp-styles/galleryStyles.css';
import '../styles/wp-styles/formatted.css';


const Gallery = () => {

  const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState("*");

  React.useEffect(() => {
    const Isotope = require('isotope-layout');
    console.log('Isotope:', Isotope);

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

  const data = useStaticQuery(graphql`
  query {
    wp {
      portfolios(first: 33) {
        edges {
          node {
            title
            slug
            alt_image_group {
              altImageFilter
              altImageFilter2
              altImageFilter3
              altImage {
                sourceUrl(size: S)
              }
              altImage2 {
                sourceUrl(size: S)
              }
              altImage3 {
                sourceUrl(size: S)
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
  const nodes = data.wp.portfolios.edges;

  const projects = nodes.map((project, i) => {
    const typeClasses = project.node.portfolioTypes.edges.reduce((val, type) => ` type-${type.node.slug}` + val, '');

    let getImageSource = () => {
      let projectFilter = `type-${project.node.alt_image_group.altImageFilter && project.node.alt_image_group.altImageFilter.toLowerCase().replace('.', '')}`,
        projectFilter2 = `type-${project.node.alt_image_group.altImageFilter2 && project.node.alt_image_group.altImageFilter2.toLowerCase().replace('.', '')}`,
        projectFilter3 = `type-${project.node.alt_image_group.altImageFilter3 && project.node.alt_image_group.altImageFilter3.toLowerCase().replace('.', '')}`;
      let img;
      switch (filterKey) {
        case projectFilter:
          img = project.node.alt_image_group.altImage.sourceUrl;
          break;
        case projectFilter2:
          img = project.node.alt_image_group.altImage2.sourceUrl;
          break;
        case projectFilter3:
          img = project.node.alt_image_group.altImage3.sourceUrl;
          break;
        default:
          img = project.node.featuredImage.sourceUrl;
      }
      return img;
    }
    return (
      <article key={`project${i}`} className={`project-thumb ${typeClasses.toString()}`}>
        <header className="entry-header" itemScope="itemscope" itemType="http://schema.org/WPHeader">
          <div className="item">
            <Link to={`/project/${project.node.slug}`} title={project.node.title}>

              <img src={getImageSource()} className="post-image" alt="" />
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

  return (
    <Layout title="Gallery">
      <Head title="Gallery" />
      <div className="inner-content">
        <div className="portfolio-filter clearfix">
          <i className="fa fa-bars">
          </i>
          <ul>
            <li className="filter-heading">Filter:</li>
            <li><button onClick={() => {
              setFilterKey("*");
            }}>All</button></li>
            <li><button onClick={() => {
              setFilterKey("type-kitchens");
            }} type="button">Kitchens</button></li>
            <li><button onClick={() => {
              setFilterKey("type-bathrooms");
            }}>Bathrooms</button></li>
            <li><button onClick={() => {
              setFilterKey("type-built-ins");
            }}>Built-ins</button></li>
          </ul>
        </div>
        <div className="project-grid">
          {projects}
        </div></div>
    </Layout>

  )
}

export default Gallery;