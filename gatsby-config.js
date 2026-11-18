/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Guillermo Brachetta — Developer & Baroque Performer",
    description:
      "Websites, applications, and a different perspective. Selected development work by Guillermo Brachetta, web developer and baroque performer.",
    siteUrl: "https://www.gbrachetta.com",
    author: "Guillermo Brachetta",
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
        name: "Guillermo Brachetta — Developer & Baroque Performer",
        short_name: "Guillermo Brachetta",
        start_url: "/",
        background_color: "#f1f0e9",
        theme_color: "#26332c",
        display: "standalone",
        icon: "src/images/favicon.svg",
      },
    },
  ],
};
