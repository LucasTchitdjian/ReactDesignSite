module.exports = {
  siteMetadata: {
    title: 'Design + Code 3',
    description: 'A GatsbyJS starter for Design + Code 3',
    keywords: 'gatsbyjs, gatsby, javascript, react, design, code, web, ux, ui, frontend',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'lo3327zfooo0',
        accessToken: 'mQli6oiUSiL_Tvl8XUY1Psijln78Vp0Hx3DGs1gtUUg'
      }
    }
  ],
}
