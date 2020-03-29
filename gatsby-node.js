const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/project.js');
  const blogTemplate = path.resolve('./src/templates/blog.js');
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
    }
  }
  `)

  console.log('res:',res);

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
}
