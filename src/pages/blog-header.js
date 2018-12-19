import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => (
		<BackgroundImage Tag="section"
			fluid={data.headerImage.childImageSharp}
		>
			<h1>Hello gatsby-background-image</h1>
		</BackgroundImage>
)

export const query = graphql`
	query {
		headerImage: file(relativePath: { eq: "images/timo_paul_lenz.jpg" }) {
			childImageSharp {
				fluid(quality: 100, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}`

//const BlogHeader = styled(BackgroundSection)`
//  width: 100%;
//  background-repeat: no-repeat;
//  background-size: cover;
//`

//export default BlogHeader
