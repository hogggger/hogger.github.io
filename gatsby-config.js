module.exports = {
  siteMetadata: {
    title: `hogger s website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: '/',
  plugins: ["gatsby-plugin-theme-ui",`gatsby-plugin-sass`, "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "md",
        "path": `${__dirname}/content/md/`
      },
      __key: "md"
    }, 
    `gatsby-transformer-remark`
    ,{
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
};