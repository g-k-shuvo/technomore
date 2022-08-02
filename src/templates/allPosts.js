import React from "react"
import { graphql } from "gatsby"

import {
  Container,
  Content,
  ContentCard,
  FeaturedImage,
  Pagination,
  Seo,
} from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, totalNumOfPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === totalNumOfPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      <FeaturedImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Lorem ipsum dolor sit amet.
        </H1>
        <P color="dark2" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam
          veritatis tempora nam, eveniet illo consequatur! Sed accusamus maiores
          ex facilis, quaerat nihil similique aspernatur molestiae ipsa, libero
          veniam sint?
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
