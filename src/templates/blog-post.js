import React from "react"
import { graphql } from "gatsby"
import BlogHeader from '../pages/blog-header'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <article className="pb5">
      <header className="vh-100 dt w-100">
        <BlogHeader file={post.frontmatter.headerImage} className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 className="f2 f-subheadline-l measure lh-title fw9">{post.frontmatter.title}</h1>
          <h2 className="f4 fw6">by {post.frontmatter.author}</h2>
        </BlogHeader>
      </header>
      <div className="f4">
        <a href="/blog">back</a>
      </div>
      <div className="ph3 ph4-m ph5-l">
        <div className="lh-copy f5 f3-m f1-l measure center pv4">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        headerImage
      }
    }
  }`

