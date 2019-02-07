module.exports = {
  siteMetadata: {
    title: "Mojo Gatsby Starter",
    titleTemplate: "Mojo Gatsby Starter",
    description:
      "Very nice starter!",
    url: "https://www.mojo.is", // No trailing slash allowed!
    image: "/src/images/mojo-icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@mojoweb",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mojo-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout/AppLayout.jsx'),
      },
    },
  ],
}
