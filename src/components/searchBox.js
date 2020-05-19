// import React from 'react';
// import { StaticQuery, graphql, navigate } from 'gatsby';
// import styled from "styled-components";
// import Search from "gatsby-wordpress-search";

// const SearchBox = () => 
// <Wrapper>
//   <StaticQuery
//     query={graphql`
//       {
//         allWordpressWpSearchResults {
//           edges {
//             node {
//               id
//               post_title
//               searchData
//               pathname
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       return (
//         <Search
//           data={data}
//           minCharacters={4}
//           contentCharacters={300}
//           maxResults={10}
//           placeholder='Search'
//           onSelect={object => navigate(object.pathname)}
//         />
//       );
//     }}
//   />
// </Wrapper>;

// const Wrapper = styled.div`
//   .container {
//   }
 
//   .input {
//   }
 
//   .suggests {
//   }
 
//   .suggest {
//   }
 
//   .suggestTitle {
//   }
 
//   .suggestContent {
//   }
// `;

// export default SearchBox;