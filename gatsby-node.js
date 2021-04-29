const path = require('path');

console.log('*******************************************');
console.log('*******************************************');
console.log('*******************************************');
console.log('*******************************************');

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
      portfolios(first: 99) {
        edges {
          node {
            slug
            id
            content
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

  res.data.wp.portfolios.edges.forEach((edge) => {
    
    createPage({
      component: projectTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
        content: edge.node.content
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

}