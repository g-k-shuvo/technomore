import React from "react"
import { FeaturedImageWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"

export const FeaturedImage = () => {
  return (
    <FeaturedImageWrapper>
      <StaticImage
        src="../images/office.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeaturedImageWrapper>
  )
}
