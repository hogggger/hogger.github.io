import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout"
import PostCard from "../components/postcard"
import "../scss/index.scss"

const flexPost = ({ data }) => {
  const nodes = data.allMarkdownRemark.edges
  const post = data.allMarkdownRemark.totalCount
  console.log('+',data.allMarkdownRemark)

  return  (
  <div>
    <Layout>
    {
      nodes.slice(0,5).map(({ node }) =>{
        const title = node.frontmatter.title || '默认标题'
        const index = Math.random()*100000+Math.random()
        return(
          <PostCard
          title={title}
          date={node.frontmatter.date}
          desc={node.excerpt}
          tags={node.frontmatter.tags}
          key={index}
          slug={node.fields.slug}
          ></PostCard>
        )
      })
    }
    </Layout>
  </div>
  )
};
export const query = graphql`
  query  {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          excerpt(truncate: true)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            tags
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  
`;
export default flexPost;
