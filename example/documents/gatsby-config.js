module.exports = {
  siteMetadata: {
    title: `Gatsby Docs`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-documents`,
      options: {
        basePath: `/`,
      },
    },
  ],
}
