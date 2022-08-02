exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  //* Create paginated pages for posts
  const postPerPage = 2
  const totalNumOfPages = Math.ceil(data.allMdx.edges.length / postPerPage)
  Array.from({ length: totalNumOfPages }).forEach((_, pageIndex) => {
    actions.createPage({
      path: pageIndex === 0 ? "/" : `/${pageIndex + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: pageIndex * postPerPage,
        totalNumOfPages,
        currentPage: pageIndex + 1,
      },
    })
  })

  //* Create single blog post
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { id },
    })
  })
}
