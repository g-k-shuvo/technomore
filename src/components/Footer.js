import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"
import { useStaticQuery, graphql } from "gatsby"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com/shuvo.2k16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook" />
          </a>
          <a
            href="https://linkedin.com/g-k-shuvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin" />
          </a>
          <a
            href="https://instagram.com/g_k_shuvo."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/g_k_shuvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          Technomore &copy; 2022. All Right Reserved.{" "}
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
