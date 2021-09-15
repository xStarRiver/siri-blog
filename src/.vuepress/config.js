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
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/77926809?v=4' }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/assets/bodyClick.js"
    }]
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
        text: '立刻投稿',
        link: 'https://forms.gle/YR4EkxPYVvgLHJSW9',
        icon: 'fab fa-wpforms'
      },
    ],
    sidebar: { },
    friendLink: [
      {
        title: '開發人員Ho Chun Hung',
        desc: 'Instagram',
        email: 'ers13542785lol@gmail.com',
        link: 'https://www.instagram.com/xstarriver/',
        logo: 'https://avatars.githubusercontent.com/u/48813247?v=4',
      },
    ],
    
    logo: 'https://avatars.githubusercontent.com/u/77926809?v=4',
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
    ["@vuepress-reco/loading-page", false],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "70%",
        // 色带HSL亮度量
        colorBrightness: "40%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 100,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 3,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ]
};
