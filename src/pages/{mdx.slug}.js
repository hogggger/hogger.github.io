import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const BlogPost = (props) =>{
    console.log('props.params: ',props.params)
    console.log('props.pageContext: ',props.pageContext)
    return (
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    )
}
export const query = graphql`
    query($id:String){
        mdx(id:{eq:$id}){
            body
        }
    }`
export default BlogPost