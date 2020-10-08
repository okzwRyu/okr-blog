module.exports = {
    title: "OKR-BLOG",
    theme: '@vuepress/theme-blog',
    description: "たくさんの雑記とほんの少しのTipsを投稿します。",
    locales: {
        '/': {
          lang: 'ja'
        }
      },
    themeConfig: {
      dateFormat: 'YYYY-MM-DD',
      nav: [
        { text: 'Blog', link: '/' },
        { text: 'Tags', link: '/tag/' },
        { text: "About", link: "/about/" }
      ]
    },
    markdown: {
      anchor: { permalink: false }
    }
  };