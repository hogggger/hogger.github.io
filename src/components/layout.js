import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { AiFillZhihuSquare } from "react-icons/ai"
import "../mystyles.scss"
import "../scss/layout.scss"

const Layout = ({ children }) => {
  const [active, setActive] = useState("")
  const data ={}

  return (
    <div className="layoutContainer">
      <nav
        className="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to=".">
          </Link>
          <a
            role="button"
            className={"navbar-burger" + active}
            aria-label="menu"
            aria-expanded="false"
  
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={"navbar-menu" + active} id="navMenu">
          <div className="navbar-end">
            <Link className="navbar-item" to="archive">Archive</Link>
            <Link className="navbar-item" to="tags">Tags</Link>
          </div>
        </div>
      </nav>
      <main className="columns is-centered" style={{ margin: `1em` }}>
        <div className="column is-two-thirds-tablet">{children}</div>
      </main>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            This website is designed by<strong > <span className="blue3">Hogger wang</span></strong> and powered by
            <a href="https://www.gatsbyjs.org"> Gatsby.js</a> and
            <a href="https://bulma.io"> Bulma</a>.
          </p>
          <p>
            Contact:
            <span className="icon is-medium"><a className="has-text-dark" href="https://github.com/hogggger"><FaGithub /></a></span>
            <span className="icon is-medium"><a className="has-text-dark" href="mailto:deuntlt@gmail.com"><MdMail /></a></span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
