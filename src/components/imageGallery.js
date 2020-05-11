import { styled } from 'baseui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import '../styles/instaStyles.css';

const Image = styled(Img, {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '55px',
  height: '55px',
  // maxHeight: '25rem',
});


const nodeURL = 'https://www.instagram.com/p';

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  ... GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node;
      return (

          <a href={`${nodeURL}/${id}`}> 
            <Image
              loading="lazy"
              alt={caption || ''}
              fluid={childImageSharp.fluid}
            />
          </a>

      );
    });



  return (


    <div className="instaBox">
      {images}
      
    </div>
  );
};

export default ImageGallery;
