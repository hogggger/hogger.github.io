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
    // 准备数据
    // 博客数据
    const blogResult = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                    frontmatter{
                        title
                    }
                }
            }
        }
    }
    `)
    const blogPost = path.resolve(`./src/templates/blogpost.js`)
    const postBlogs = blogResult.data.allMarkdownRemark.edges
    postBlogs.forEach(( {node} ,index) =>{
        console.log('index+++++++',index)
        // 使用index 、next previous 来设置上一篇和下一篇文章的快速链接
        const next = (index === postBlogs.length-1)? null :postBlogs[index+1].node
        const previous = (index === 0)?null :postBlogs[index-1].node
        createPage({
            path:"md"+node.fields.slug,
            component:blogPost,
            context:{
                slug:node.fields.slug,
                previous,
                next
            }
        })
        console.log('----',node.fields.slug)
    })
    

}