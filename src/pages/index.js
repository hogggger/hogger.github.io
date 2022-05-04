import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout"
import "../scss/index.scss"

const flexPost = ({ data }) => {
  debugger
  return  (<div><Layout> </Layout></div>)
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;
export default flexPost;