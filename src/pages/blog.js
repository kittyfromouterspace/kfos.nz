import React from 'react'
import Blog from "../components/blog"
import { Rss } from 'react-feather'

export default () => {
  return (
      <article className="cf ph3 ph5-ns pv5">
        <h1 className="mb3 mt0 lh-title">recent blog posts</h1>
        <div className="fr">
          <a className="f6 fw4 mt0 mb0 black-60 no-underline" href="/rss.xml"><Rss /></a>
        </div>
        <Blog />
      </article>
  )
}

