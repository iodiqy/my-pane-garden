module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
        rootNote: `/_index`,
        parseWikiLinks: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
  ],
  siteMetadata: {
    title: `@farkhad's notes`,
    author: "Farkhad Dilman",
    description: "Notes on my thinking process",
  }
}
