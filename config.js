
const path = require('path');

module.exports = {
  siteTitle: `Gatsby Universal`,
  siteTitleShort: `GatsbyU`,
  siteDescription: `An opinionated starter for Gatsby.`,
  siteUrl: `https://gu.fabianschultz.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  postPerPage: 10,
  logo: path.resolve(__dirname, 'static/images/icon.png'),
  disqus: `gatsby-typescript`,
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
