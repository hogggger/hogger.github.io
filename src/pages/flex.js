import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const flexPost = ({ data }) => {
  debugger
  return  <MDXRenderer>{data.mdx.body}</MDXRenderer>;
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;
export default flexPost;
