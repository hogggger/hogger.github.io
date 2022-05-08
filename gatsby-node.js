const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql,actions }) =>{
    const { createPage } = actions
    const result = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
    const blogPost = path.resolve(`./src/templates/blogpost.js`)
    result.data.allMarkdownRemark.edges.forEach(( {node} ) =>{
        createPage({
            path:"md"+node.fields.slug,
            component:blogPost,
            context:{
                slug:node.fields.slug
            }
        })
        console.log('----',node.fields.slug)
    })
    

}