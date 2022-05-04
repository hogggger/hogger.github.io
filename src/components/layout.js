import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { AiFillZhihuSquare } from "react-icons/ai"
import "../mystyles.scss"
import "../scss/layout.scss"

const Layout = ({ children }) => {
  const [active, setActive] = useState("")
  // shiyong useStaticQuery 来查询是否有品牌图片  初步来看userStaticQuery有点类似 query和vue的computed
//   const data = useStaticQuery(graphql`
//   {
//     file(absolutePath: { regex: "/brand.png/" }) {
//       publicURL
//     }
//   }
// `)

  return (
    <div class="layoutContainer">
      <nav
        class="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class={"navbar-menu" + active} id="navMenu">
          <div class="navbar-end">
            <Link className="navbar-item" to="archive">Archive</Link>
            <Link className="navbar-item" to="tags">Tags</Link>
          </div>
        </div>
      </nav>
      <main class="columns is-centered" style={{ margin: `1em` }}>
        <div class="column is-two-thirds-tablet">{children}</div>
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            This website is designed by<strong > <span class="blue3">Hogger wang</span></strong> and powered by
            <a href="https://www.gatsbyjs.org"> Gatsby.js</a> and
            <a href="https://bulma.io"> Bulma</a>.
          </p>
          <p>
            Contact:
            <span class="icon is-medium"><a className="has-text-dark" href="https://github.com/hogggger"><FaGithub /></a></span>
            <span class="icon is-medium"><a className="has-text-dark" href="mailto:deuntlt@gmail.com"><MdMail /></a></span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
