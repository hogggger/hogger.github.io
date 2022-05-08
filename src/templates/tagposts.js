import React from "react"
import { graphql } from "gatsby"
import "../mystyles.scss"
import Layout from "../components/layout"
import PostCard from "../components/postcard"

const BlogIndex = ({data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges
  return (
      <Layout>
      <h1 class="title has-text-black">Posts for tag:  <span class="tag is-large is-info">{pageContext.targetTag}</span></h1>
      <p class="subtitle">{posts.length + " posts"}</p>
      <hr />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <PostCard 
            title={title} 
            date={node.frontmatter.date}
            desc={node.excerpt}
            tags={node.frontmatter.tags}
            slug={node.fields.slug}
          />
        )
      })}
      </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($targetTag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $targetTag}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
