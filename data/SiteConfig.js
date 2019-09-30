const config = {
  siteTitle: 'muhammadsyafr',
  siteTitleShort: 'syafr',
  siteTitleAlt: 'muhammadsyafr',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://muhammadsyafr.me',
  repo: 'https://github.com/',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Hi saya Syafrizal, asal Yogyakarta. Senang menulis',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125079658-2',
  disqusShortname: 'syafr',
  postDefaultCategoryID: 'Tech',
  userName: 'syafr',
  userEmail: 'muhammadsyafr@gmail.com',
  userTwitter: 'muhammadsyafrzl',
  userLocation: 'Yogyakarta, ID',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription: 'Saya seorang web developer, senang menulis dan juga sharing seputar IT. Di sini kamu bisa membaca beberapa tulisanku. Semoga bermanfaat.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Now',
      link: '/now/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
