import React from "react"
import { graphql, withPrefix } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
	const image = 'url(' + withPrefix(post.frontmatter.headerImage) + ')'
	const header = 'f2 f-subheadline-l measure lh-title fw9 white-90'
	const style = {background: image, backgroundRepeat: "no-repeat", backgroundSize: "cover"}
  return (
    <article className="pb5">
      <header className="vh-75 dt w-100">
				<div style={style} className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 className="f2 f-subheadline-l measure lh-title fw9 white-90">{post.frontmatter.title}</h1>
          <h2 className="f4 fw6 white-90">by {post.frontmatter.author}</h2>
        </div>
      </header>
      <div className="ph3 ph4-m ph5-l">
        <div className="f5 lh-copy measure center">
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

