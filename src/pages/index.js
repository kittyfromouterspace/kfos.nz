import React from 'react'
import Blog from "../components/blog"
import logo from "../logo.jpg"

export default () => {
  return (
    <div>
      <section className="flex-ns vh-100 items-center">
        <div className="mw6 ph5">
          <img src={logo} alt="logo with a cat in space" /> 
        </div>
        <div className="mt4 tc tl-ns ph3">
          <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">kitty from outer space</h1>
          <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">right size impact companies and consulting<br />since 2007</h2>
        </div>
      </section>
      <article className="cf ph3 ph5-ns pv5">
        <Blog />
      </article>
    </div>
  )
}
