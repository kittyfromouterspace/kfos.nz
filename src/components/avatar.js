import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// TODO: StaticQuery can't use parameters so we need to find a beter way to do this
export default ({className, alt}) => (
  <StaticQuery
    query={graphql`
      query {
        lenz: file(relativePath: { eq: "avatars/lenz.jpg" }) {
          ...fluidImage
        }
      }
    `
    }
    render={data => (
      <Img alt={alt} className={className} fluid={data.lenz.childImageSharp.fluid} />
    )}
  />
)

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;
