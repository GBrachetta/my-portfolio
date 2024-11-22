/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Simplefolio",
        short_name: "Simplefolio",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#02aab0",
        display: "standalone",
        icon: "src/images/favicon.svg",
      },
    },
  ],
};
