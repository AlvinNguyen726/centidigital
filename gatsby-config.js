module.exports = {
  siteMetadata: {
    title: "CentiDigital",
    author: "Alvin Nguyen",
    description: "Transforming and cultivating business through strategy, design, and development"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CentiDigital',
        short_name: 'CD',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
