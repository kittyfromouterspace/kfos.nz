import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Link from './link'
import Avatar from './avatar'

export default () => (
  <StaticQuery
    query={graphql`
        query {
          allMarkdownRemark {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  author
                  avatar
                }
                fields {
                  slug
                }
                excerpt
                timeToRead
              }
            }
          }
        }
      `
    }
    render={data => (
			<ul className="list pl0 mt0 measure center">
				{data.allMarkdownRemark.edges.map(({ node }) => (
				<li key={node.id}
					className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
					<Avatar alt={node.frontmatter.author} src={node.frontmatter.avatar} className="w2 h2 w3-ns h3-ns br-100"/>
					<div className="pl3 flex-auto">
						<Link to={node.fields.slug} className="no-underline">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">{node.frontmatter.title}</h1>
              <h2 className="f6 fw4 mt0 mb0 black-60">{node.frontmatter.date}</h2>
						</Link>
					</div>
				</li>
				))}
			</ul>
    )}
  />
)
