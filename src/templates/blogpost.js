import React from "react"
import { graphql ,Link} from "gatsby"
import Layout from "../components/layout"
import "../scss/blogPost.scss"
export default ({ data ,pageContext,location}) => {
  const post = data.markdownRemark
  const {previous,next} = pageContext
  console.log('+++++',previous,next)
  return (
    <Layout>
      <div className="blogContent">
        <h1 className="headerTitle">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <nav className="blogNav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }} 
          >
          <li>
                 {previous  && previous.frontmatter && (
              <Link to={"/md" + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next &&next.frontmatter && (
              <Link to={"/md" + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          </ul>
        </nav>
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