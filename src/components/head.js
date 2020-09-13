import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../assets/favicon/favicon.ico';


const Head = ({ title, isProject, featuredImg }) => {
  const data = useStaticQuery(
    graphql`
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
      site {
        siteMetadata {
          title
        }
      }
    }
    `
  )

  return (
    <Helmet title={`${title} • ${data.site.siteMetadata.title} `} encodeSpecialCharacters={false} link={[
      {
        "rel": "icon",
        "type": "image/png",
        "href": { favicon }
      }
    ]
    }>

      <meta property="og:type" content="article" />
      <meta property="og:title" content={`Dark Horse Woodworks : ${title} ${title.includes('Project') ? '' : 'Project'}`} />
      <meta property="og:image" content={featuredImg} />

      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <script src="https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit"
        async defer></script>
      {isProject && <script src={`//platform.houzz.com/js/widgets.js?${new Date().getTime()})`}></script>
      }
      <body className={title === 'Home' ? 'Home' : ''} />

    </Helmet>
  )
}

export default Head;