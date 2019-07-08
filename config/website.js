const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Tanner Lovell - Dev Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Tanner Lovell', // Alternative Site title for SEO
  siteTitleShort: 'Tanner', // short_name for manifest
  siteHeadline: 'A Pure Form of Narcissism', // Headline for schema.org JSONLD
  siteUrl: 'tannerlovell.ninja', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@tleelovell', // Twitter Username
  ogSiteName: 'tanner', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
