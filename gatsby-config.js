require("ts-node").register({ files: true });

module.exports = {
  siteMetadata: {
    author: "onichandame",
    github: "https://github.com/onichandame",
    homepage: "https://onichandame.github.io",
  },
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/content/translations`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-template`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // formatted posts
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resume",
        path: `${__dirname}/content/resume`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [{ resolve: "gatsby-remark-autolink-headers" }], // add heading anchor to mdx posts
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1035, sizeByPixelDensity: true },
          },
          { resolve: "gatsby-remark-copy-linked-files" },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
