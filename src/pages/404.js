import React from "react"
import { graphql } from "gatsby"
import { H1 } from "../elements"
import { Container, Content, FeaturedImage } from "../components"

const notFound = ({ data }) => {
  const featuredImage = data.imageSharp.fluid

  return (
    <Container>
      <FeaturedImage fixed={featuredImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh..! Page not found!
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query notFoundQuery {
    imageSharp(fluid: { originalName: { eq: "sad-cat.jpg" } }) {
      id
      fluid {
        sizes
        srcSet
        src
        srcSetWebp
        srcWebp
        aspectRatio
      }
      gatsbyImageData(placeholder: BLURRED)
    }
  }
`
