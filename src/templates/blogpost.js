import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../scss/blogPost.scss"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div class="blogContent">
        <h1 className="headerTitle">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div>占位，上一篇或者下一篇</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`