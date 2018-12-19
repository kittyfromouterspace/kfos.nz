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
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <tbody className="lh-copy">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <tr key={node.id}>
                <td className="pv3 pr3 bb b--black-20">
                  <Avatar alt={node.frontmatter.author} src={node.frontmatter.avatar} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                </td>
                <td className="pv3 pr3 bb b--black-20">
                  <Link to={node.fields.slug} className="no-underline">
                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{node.frontmatter.title}</h1>
                    <h2 className="f6 fw4 mt0 mb0 black-60">{node.frontmatter.date}</h2>
                  </Link>
                </td>
                <td className="pv3 pr3 bb b--black-20">
                  <p className="f5 lh-copy measure-narrow">
                    {node.excerpt}
                  </p>
                </td>
                <td className="pv3 pr3 bb b--black-20">
                  <Link to={node.fields.slug} className="no-underline">
                    <span className="f6 fw4 lh-copy mt0 mb0 black-60">{node.timeToRead}min to read</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  />
)
