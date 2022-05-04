module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-theme-ui",`gatsby-plugin-sass`, "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "md",
        "path": "./src/md/"
      },
      __key: "md"
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          // `gatsby-remark-mathjax`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/md`,
      },
    },{
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
};