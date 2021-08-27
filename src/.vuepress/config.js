const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PLKCFS-Siri 討論區',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: "#5b5b87" }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:title', content: 'PLKCFS-Siri' }],
    ['meta', { property: 'og:url', content: 'https://xstarriver.github.io/siri-blog' }],
    ['meta', { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/77926809?v=4' }],
    ['meta', { property: 'og:description', content: ' SIRI Blog' }],
    ['meta', { property: 'og:site_name', content: 'PLKCFS-Siri 討論區' }],
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/89564781?v=4' }],
  ],
  theme: 'reco',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  dest: 'build',
  base: '/siri-blog/',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    mode: 'dark', // Default 'auto'，'auto' follows system, 'dark' is set to dark mode, 'light' is set to light mode
    modePicker: false,
    editLinkText: '',
    lastUpdated: false,
    noFoundPageByTencent: false,
    type: 'blog',
    blogConfig: {},
    nav: [
      {
        text: '返回首頁',
        link: 'https://xstarriver.github.io',
        icon: 'reco-home',
      },
      {
        text: '活動時間表',
        link: 'https://xstarriver.github.io/activity.html',
        icon: 'reco-date'
      },
      {
        text: 'Instagram',
        link: 'https://www.instagram.com/xstarriver/',
        icon: 'fab fa-instagram'
      },
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/channel/UCibVbf4p7XDVuW4Uly3DoVA',
        icon: 'fab fa-youtube'
      },
      {
        text: '立刻投稿',
        link: 'https://www.youtube.com/channel/UCibVbf4p7XDVuW4Uly3DoVA',
        icon: 'fab fa-wpforms'
      },
    ],
    sidebar: { },
    friendLink: [
      {
        title: 'xStarRiver',
        desc: 'GitHub link',
        email: 'ers13542785lol@gmail.com',
        link: 'https://github.com/xstarriver',
        logo: 'https://avatars.githubusercontent.com/u/48813247?v=4',
      },
    ],
    logo: 'https://avatars.githubusercontent.com/u/89564781?v=4',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'PLKCFS-Siri',
    authorAvatar: 'https://avatars.githubusercontent.com/u/89564781?v=4',
    startYear: '2021',
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
    ["@vuepress-reco/loading-page", false]
  ]
};
