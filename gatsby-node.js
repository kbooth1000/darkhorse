const path = require('path');

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const projectTemplate = path.resolve('./src/templates/project.js');
  const blogTemplate = path.resolve('./src/templates/blog.js');
  // const pageTemplate = path.resolve('./src/templates/page.js');
  const res = await graphql(`
  query {
    wp {
      posts(first: 99) {
        edges {
          node {
            slug
          }
        }
      }
      portfolio(first: 99) {
        edges {
          node {
            slug
          }
        }
      }
      pages(first: 99) {
        edges {
          node{
            id
            uri
            isFrontPage
          }
        }
      }
    }
  }
  `)

  

  res.data.wp.portfolio.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.wp.posts.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })



  // res.data.wp.pages.edges.forEach(page => {
  //   let pageUri = () => {
  //     console.log('page.node.uri:', page.node.uri);
      
  //     if(page.node.isFrontPage) { return '/althome' }
  //     if(page.node.uri === '/gallery') {return '/altgallery'}
  //     if(page.node.uri === '/blog') {return '/altblog'}
  //     return page.node.uri;
  //   }
  //   createPage({
  //     path: pageUri(), //page.node.isFrontPage ? '/althome' : page.node.uri,
  //     component: pageTemplate,
  //     context: {
  //       id: page.node.id
  //     }
  //   })
  // })

}




// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /isotope-layout/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }